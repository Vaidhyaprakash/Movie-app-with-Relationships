const {User,Booked,Screen,Seats} = require("../models");

exports.userTicketBooking = async function userTicketBooking(req,h){
    const {USERId,MOVIEId,THEATREId,SCREENId,ticketCount}=req.payload;
    let seatNumber = [];
    try{
       const screen= await Screen.findOne({
           where:{
               id:SCREENId
           },
           include:['SEATS']
       });
       if(screen.SEATS.availableSeats>=ticketCount){
           for(let i=1;i<=ticketCount;i++){
               let x = screen.SEATS.bookedSeats + i;
               seatNumber.push(x);
           }
           await Seats.update({
               availableSeats:screen.SEATS.availableSeats-ticketCount,
               bookedSeats:screen.SEATS.bookedSeats+ticketCount
           },{
               where:{
                   id:screen.SEATS.id
               }
           });
     
           const booked = await Booked.create({USERId,MOVIEId,THEATREId,SCREENId,seatNumber,UserId:USERId});
           const Ticket = await Booked.findAll({
               where:{
                   USERId
               },
               include:['USER','MOVIE','THEATRE','SCREEN']
           });
           const Details=[];
           for(let key in Ticket){
               const arr = [];
               arr.push(Ticket[key].USER.name);
               arr.push(Ticket[key].MOVIE.title);
               arr.push(Ticket[key].THEATRE.name);
               arr.push(Ticket[key].SCREEN.screenName);
               arr.push(Ticket[key].seatNumber);
               arr.push(Ticket[key].SCREEN.date);
               Details.push(arr);
           }
           

           return h.response(Details);
       }else{
           return "Tickets are not available";
       } 
    }catch(err){
        console.log(err);
    }
};