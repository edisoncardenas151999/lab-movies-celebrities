// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();
const Movie = require("../models/movie.model");
const Celebrity = require("../models/Celebrity.model");


router.get("/movie/movies", (req, res, next) => {
    Movie.find()
      .then((allTheMoviesFromDB) => {
        console.log("Retrieved Movies from DB:", allTheMoviesFromDB);
        res.render("movies/movies", { allTheMoviesFromDB });
      })
      .catch((error) => {
        console.log("Error while getting the movies from the DB: ", error);
  
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });


router.get("/movie/create",(req,res)=>{
  Celebrity.find()
  .then((allTheCelebFromDB) => {
    console.log("Retrieved Movies from DB:", allTheCelebFromDB);
    res.render("movies/new-movie", { allTheCelebFromDB });
  })
  .catch((error) => {
    console.log("Error while getting the movies from the DB: ", error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
})


router.post("/movie/create", (req, res, next) => {
    console.log(req.body);
    const { title, genre, plot, cast } = req.body;
   Movie.create({ title, genre, plot, cast })
      .then(() => res.redirect("movies"))
      .catch((error) => next(error));
  });


  

module.exports = router;