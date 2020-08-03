const movies = require('./movies.json');
let id = 10;


module.exports = {
    getMovies: (req,res) => {
        /* console.log(movies) */
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
                poster,
                updated: false
            };
            movies.push(newMovie);
            id++;
            res.status(200).send(movies);
        }
    },

    deleteMovie: (req, res) => {
        const {id} = req.params
        const index = movies.findIndex( movie => movie.id === +id);
        if(index === -1){
            res.status(404).send('Movie not found in list')
        } else {
            movies.splice(index, 1);
            res.status(200).send(movies)
        }
    },

    updateMovie: (req, res) => {
        const index = movies.findIndex( elem => elem.id === +req.params.id);
        if( movies[index].updated === true ){
            res.status(404).send('Movie has already been updated')
        } else {
            movies[index].updated = true
            res.status(200).send(movies)
        }
    },

    editMovie: (req, res) => {
        const index = movies.findIndex( elem => elem.id === +req.params.id);
        if( index === -1 ) {
            res.status(404).send('Movie has already been edited')
        } else {
            movies[index].title = req.body.title
            res.status(200).send(movies)
        }
    }
}