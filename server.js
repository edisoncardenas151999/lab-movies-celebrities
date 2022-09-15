const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;


// const celebrities = require('./routes/celebrities.routes');
// app.use('/celebrity/create', celebrities);


// const movies = require('./routes/movies.routes');
// app.use('/movies', movies);



app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
