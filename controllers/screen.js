const {Screen,Seats} = require("../models/screen");

exports.showScreens = async function showScreens(req,h){
    try{
        const screens = await Screen.findAll({include:['SEATS']});
        return h.response(screens);
    }catch(err){
        console.log(err);
    }
};

exports.addScreen = async function addScreen(req,h){
    const {screenName,MovieId,TheatreId,totalSeats,availableSeats,bookedSeats}=req.payload;
    try{
        const screen = await Screen.create({screenName,MovieId,TheatreId,totalSeats});
        const seats = await Seats.create({
            ScreenId:screen.id,
            availableSeats,
            bookedSeats
        });
        return "Screen and Seats data added in DB";
    }catch(err){
        console.log(err);
    }
};

exports.updateScreen = async function updateScreen(req,h){
    const {id,screenName,MovieId,TheatreId,totalSeats,availableSeats,bookedSeats}=req.payload;
    try{
        const screen = await Screen.findOne({
            include:['SEATS'],
            where:{
                id
            }
        });
        if(screen==null){
            return `No Screen with id ${id} Exists`;
        }else{
            await screen.update({
                screenName,MovieId,TheatreId,totalSeats
            });
            screen.SEATS.availableSeats=availableSeats;
            screen.SEATS.bookedSeats=bookedSeats;
            screen.save();
            return `Screen and Seats details updated Successfully.`;
        }
    }catch(err){
        console.log(err);
    }
};

exports.deleteScreen = async function deleteScreen(req,h){
    const id = req.params.ScreenId;
    try{
        const screen = await Screen.findOne({
            where:{
                id
            }
        });
        if(screen==null){
            return "No Such Screen Exists";
        }else{
            await Screen.findOne({
                where:{
                    id
                }
            }).destroy();
            await Seats.findOne({
                where:{
                    ScreenId:id
                }
            }).destroy();
            return `Screen and Seat details deleted Successfully`;
        }
    }catch(err){
        console.log(err);
    }
};