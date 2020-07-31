const movies = require('./movies.json');
let id = 11;


module.exports = {
    getMovies: (req,res) => {
        res.status(200).send(movies);
    },

    addMovie: (req,res) => {
        const {title, year, poster} = req.body;
        if (!title) {
            res.status(405).send('Expected a title for movie')            
        } else {
            const newMovie = {
                id,
                title,
                year,
                poster
            };
            movies.push(newMovie);
            id++;
            res.status(200).send(movies);
        }
    }
}