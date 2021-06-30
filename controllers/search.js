const {Movie,Theatre} = require("../models");

exports.movieSearch = async function movieSearch(req,h){
    const {title}=req.payload;
    try{
        const movie = await Movie.findOne({
            where:{
                title
            },
            include:['SCREEN']
        });
        if(movie==null){
            return `No movie with title ${title} exists`;
        }else{
            let theatre=[];
            for(let key in movie.SCREEN){
                if(key=='TheatreId'){
                    const search = await Theatre.findOne({
                        where:{
                            id:movie.SCREEN[key]
                        }
                    });
                    theatre.push(search.name);
                }
            }
            return h.response(theatre);
        }
    }catch(err){
        console.log(err);
    }
};

exports.theatreSearch = async function theatreSearch(req,h){
    const {name} = req.payload;
    try{
        const theatre = await Theatre.findAll({
            where:{
                name
            },
            include:['SCREEN']
        });
        if(theatre==null){
            return `No theatren named ${name} is there.`;
        }else{
            let movie=[];
            for(let key in theatre.SCREEN){
                if(key=='MovieId'){
                    const search = await Movie.findOne({
                        where:{
                            id:theatre.SCREEN[key]
                        }
                    });
                    movie.push(search);
                }
            }
            return h.response(movie);
        }
    }catch(err){
        console.log(err);
    }
};

exports.areaSearch = async function areaSearch(req,h){
    const {pincode}=req.payload;
    try{
        const theatres = await Theatre.findAll({
            where:{
                pincode
            }
        });
        if(theatres!=null){
            return h.response(theatres);
        }else{
            return `There are no theatres in the area ${pincode}`;
        }
        
    }catch(err){
        console.log(err);
    }
};

exports.actorSearch = async function actorSearch(req,h){
    const {hero}=req.payload;
    try{
        const movies = await Movie.findAll({
            where:{
                hero
            }
        });
        if(movies==null){
            return `Recently, ${hero} had acted no movies`;
        }else{
            return h.response(movies);
        }
    }catch(err){
        console.log(err);
    }
};

exports.dateSearch = async function dateSearch(req,h){
    const {date} = req.payload;
    try{
        const movies = await Movie.findAll({
            where:{
                releaseDate:date
            }
        });
        if(movies==null){
            return `No movie id released on ${date}`;
        }else{
            return h.response(movies);
        }
    }catch(err){
        console.log(err);
    } 
};