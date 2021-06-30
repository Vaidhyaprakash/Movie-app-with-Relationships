const Theatre = require("../models/theatre");

exports.showTheatres = async function showTheatres(req,h){
    try{
        const theatres = await Theatre.findAll({include:['SCREEN','Booked']});
        return h.response(theatres);
    }catch(err){
        console.log(err);
    }
};

exports.addTheatre = async function addTheatre(req,h){
    const {name,screens,pincode,date}=req.payload;
    try{
        const theatre = await Theatre.create({name,screens,pincode,date});
        return "Theatre details added to Theatres table, do fill screens and seating details seperately.";
    }catch(err){
        console.log(err);
    }
};

exports.updatetTheatre = async function updatetTheatre(req,h){
    const {name,screens,pincode,date}=req.payload;
    try{
        const theatre = await Theatre.findOne({
            where:{
                name
            }
        });
        if(theatre==null){
            return "No such Theatre Exists";
        }else{
            
                await Theatre.update({name,screens,pincode,date},{
                    where:{
                        name
                    }
                });
                return `${name} updated Successfully.`
            
        }
    }catch(err){
        console.log(err);
    }
};

exports.deleteTheatre = async function deleteTheatre(req,h){
    const name = req.params.theatreName;
    try{
        await Theatre.findOne({
            where:{
                name
            }
        }).destroy();
        return `Theatre with name ${name} is deleted`;
    }catch(err){
        console.log(err);
    }
};