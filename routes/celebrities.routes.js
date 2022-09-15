// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");



router.get("/celebrity/celebrities", (req, res, next) => {
    Celebrity.find()
      .then((allTheCelebFromDB) => {
        // -> allTheBooksFromDB is a placeholder, it can be any word
        console.log("Retrieved Celeb from DB:", allTheCelebFromDB);
  
        // we call the render method after we obtain the books data from the database -> allTheBooksFromDB
        res.render("celebrities/celebrities.hbs", { celebrities: allTheCelebFromDB }); // pass `allTheBooksFromDB` to the view (as a variable books to be used in the HBS)
      })
      .catch((error) => {
        console.log("Error while getting the celebs from the DB: ", error);
  
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

//   router.get("/celebrities",(req,res)=>{
//     res.render("celebrities/celebrities")
// })

  router.get("/celebrity/create",(req,res)=>{
    res.render("celebrities/new-celebrity.hbs")
})


router.post("/celebrity/create", (req, res, next) => {
    console.log(req.body);
    const { name, occupation, catchPhrase } = req.body;
  
    Celebrity.create({ name, occupation, catchPhrase })
      .then(() => res.redirect("celebrities"))
      .catch((error) => next(error));
  });


  

module.exports = router;