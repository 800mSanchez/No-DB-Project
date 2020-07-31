const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/movies", ctrl.getMovies);
app.post("/api/movies", ctrl.addMovie);
//app.delete("/api/movies/:id")

app.listen(port, () => console.log(`I love you port: ${port}`));
