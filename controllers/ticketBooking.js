const {User,Booked,Screen,Seats} = require("../models");

exports.userTicketBooking = async function userTicketBooking(req,h){
    const {UserId,MovieId,TheatreId,ScreenId,ticketCount}=req.payload;
    let seatNumber = [];
    try{
       const screen= await Screen.findOne({
           where:{
               id:ScreenId
           },
           include:['SEATS']
       });
       if(screen.SEATS.availableSeats>=ticketCount){
           for(let i=1;i<=ticketCount;i++){
               let x = screen.SEATS.bookedSeats + i;
               seatNumber.push(x);
           }
           screen.SEATS.availableSeats-=ticketCount;
           screen.SEATS.bookedSeats+=ticketCount;
           screen.save();
           Seats.save();

           const booked = await Booked.create({UserId,MovieId,TheatreId,ScreenId,seatNumber});
           const Ticket = await Booked.findAll({
               where:{
                   UserId
               },
               include:['USER','MOVIE','THEATRE','SCREEN']
           });
           return h.response(Ticket);
       }else{
           return "Tickets are not available";
       } 
    }catch(err){
        console.log(err);
    }
};