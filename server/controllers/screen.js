const {Screen,Seats} = require("../models");

exports.showScreens = async function showScreens(req,h){
    try{
        const screens = await Screen.findAll({include:['SEATS']});
        return h.response(screens);
    }catch(err){
        console.log(err);
    }
};

exports.addScreen = async function addScreen(req,h){
    const {screenName,MovieId,TheatreId,totalSeats,availableSeats,bookedSeats,date}=req.payload;
    try{
        const screen = await Screen.create({screenName,MovieId,TheatreId,totalSeats,date});
        const seats = await Seats.create({
            SEATId:screen.id,
            availableSeats,
            bookedSeats
        });
        return "Screen and Seats data added in DB";
    }catch(err){
        console.log(err);
    }
};

exports.updateScreen = async function updateScreen(req,h){
    const {id,screenName,MovieId,TheatreId,totalSeats,availableSeats,bookedSeats,date}=req.payload;
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
                screenName,MovieId,TheatreId,totalSeats,date
            });
            await Seats.update({bookedSeats,availableSeats},{where:{
                SEATId:screen.id
            }});
            return `Screen and Seats details updated Successfully.`;
        }
    }catch(err){
        console.log(err);
    }
};

exports.deleteScreen = async function deleteScreen(req,h){
    const id = req.params.screenId;
    try{
        const screen = await Screen.findOne({
            where:{
                id
            }
        });
        if(screen==null){
            return "No Such Screen Exists";
        }else{
            await Screen.destroy({
                where:{
                    id
                }
            });
            await Seats.destroy({
                where:{
                    SEATId:id
                }
            });
            return `Screen and Seat details deleted Successfully`;
        }
    }catch(err){
        console.log(err);
    }
};