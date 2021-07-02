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
                
                    const search = await Theatre.findOne({
                        where:{
                            id:movie.SCREEN[key].TheatreId
                        }
                    });
                    theatre.push(search.name);
                
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
        const theatre = await Theatre.findOne({
            where:{
                name
            },
            include:['SCREENS']
        });
        if(theatre==null){
            return `No theatre named ${name} is there.`;
        }else{
            let movie=[];
            for(let k in theatre.SCREENS){
                
                    const search = await Movie.findOne({
                        where:{
                            id:theatre.SCREENS[k].MovieId
                        }
                    });
                    movie.push(search.title);
                
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
    const {hero,heroine}=req.payload;
    if(hero!=undefined){
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
    }else{
        try{
            const movies = await Movie.findAll({
                where:{
                    heroine
                }
            });
            if(movies==null){
                return `Recently, ${heroine} had acted no movies`;
            }else{
                return h.response(movies);
            }
        }catch(err){
            console.log(err);
        }
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