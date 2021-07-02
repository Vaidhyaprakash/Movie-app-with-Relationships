const {Theatre} = require("../models");

exports.showTheatres = async function showTheatres(req,h){
    try{
        const theatres = await Theatre.findAll({include:['SCREEN','Booked']});
        return h.response(theatres);
    }catch(err){
        console.log(err);
    }
};

exports.addTheatre = async function addTheatre(req,h){
    const {name,screens,pincode}=req.payload;
    try{
        const theatre = await Theatre.create({name,screens,pincode});
        return "Theatre details added to Theatres table, do fill screens and seating details seperately.";
    }catch(err){
        console.log(err);
    }
};

exports.updatetTheatre = async function updatetTheatre(req,h){
    const {id,name,screens,pincode}=req.payload;
    try{
        const theatre = await Theatre.findOne({
            where:{
                id
            }
        });
        if(theatre==null){
            return "No such Theatre Exists";
        }else{
            
                await Theatre.update({name,screens,pincode},{
                    where:{
                        id
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
        const theatre = await Theatre.findOne({
            where:{
                name
            }
        });
        if(theatre==null){
            return `No Thestre with name ${name} exists`;
        }else{
            await Theatre.destroy({where:{name}});
        }
        return `Theatre with name ${name} is deleted`;
    }catch(err){
        console.log(err);
    }
};