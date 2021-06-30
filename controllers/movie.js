const Movie = require("../models/movie");

exports.showMovies = async function showMovies(req,h){
    try{
        const movies = await Movie.findAll();
        return h.response(movies);
    }catch(err){
        console.log(err);
    }
};

exports.addMovie = async function addMovie(req,h){
    const {title,hero,heroine,director,durationInHrs,releaseDate}=req.payload;
    try{
        const movie = await Movie.create({title,hero,heroine,director,durationInHrs,releasedate});
        return "Movie added to the Movies Table";
    }catch(err){
        console.log(err);
    }
};

exports.updateMovie = async function updateMovie(req,h){
    const {title,hero,heroine,director,durationInHrs,releaseDate}=req.payload;
    try{
        const movie=await Movie.findOne({
            where:{
                title
            }
        });
        if(movie==null){
            return `Movie with title ${title} does not exist`;
        }else{
                await Movie.update({title,hero,heroine,director,durationInHrs,releaseDate},{
                    where:{
                        title
                    }
                });
                return `Movie ${title} Updated`;
        }
    }catch(err){
        console.log(err);
    }
};

exports.deleteMovie = async function deleteMovie(req,h){
    const title = req.params.movieTitle;
    try{
        const movie=await Movie.findOne({
            where:{
                title
            }
        });
        if(movie==null){
            return `Movie with title ${title} does not exist`;
        }else{
            
                await Movie.destroy({
                    where:{
                        title
                    }
                });
                return `Movie ${title} deleted Successfully.`
            
        }
    }catch(err){
        console.log(err);
    }
};