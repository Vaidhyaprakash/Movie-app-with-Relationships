const User = require("../models/user");

exports.showUsers = async function showUsers(req,h){
    try{
        const users = await User.findAll();
        return h.response(users);
    }catch(err){
        console.log(err);
    }
};

exports.addUser = async function addUser(req,h){
    const { name, age}=req.payload;
    try{
        const user = await User.create({name,age});
        return `New User ${name} is created`;
    }catch(err){
        console.log(err);
    }
};

exports.updateUser = async function updateUser(req,h){
    const{id,name,age}=req.payload;
    try{
        const user = await User.findOne({
            where:{
                id
            }
        });
        if(user==null){
            return "No Such user Exists";
        }else{
            await User.update({name,age},{
                where:{
                    id
                }
            });
            return `${name} User's details updated successfully.`
        }
    }catch(err){
        console.log(err);
    }
};

exports.deleteUser = async function deleteUser(req,h){
    const id = req.params.userId;
    try{
        const user = await User.findOne({
            where:{
                id
            }
        });
        if(user==null){
            return "No Such user Exists";
        }else{
            await User.destroy({
                where:{
                    id
                }
            });
            return `User Deleted Successully`;
        }
    }catch(err){
        console.log(err);
    }
};