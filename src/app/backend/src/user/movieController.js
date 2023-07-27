var movieModel = require('./movieModel');

var createSaveControllerFn = async (req, res) =>  {
    try {
      const body = req.body;
      const movieModelData = new movieModel();
      movieModelData.title = body.title;
      movieModelData.year = body.year;
      movieModelData.description = body.description;
      movieModelData.image = body.image;
      
      await movieModelData.save();
      console.log(req.body);
      console.log(movieModelData);

      res.status(200).send({
        status: true,
        message: "Movie saved successfully",
      });
      
    } catch (error) {
      res.status(400).send(error);
    }
  }

  var getSaveControllerFn = async (req, res) => {
    try {
       // Fetch the email of the user from the query parameters
    const email = req.query.email;

    // Find the user by email and get their saved movies
    const savedMovies = await movieModel.find({ userEmail: email });
  
      res.status(200).json(savedMovies);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching saved movies' });
    }
  };

  module.exports = { createSaveControllerFn, getSaveControllerFn };

