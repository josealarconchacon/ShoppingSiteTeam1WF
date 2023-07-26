const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const routes = require('./routes/routes'); // Import the Router from routes.js
const cors = require('cors');

const userController = require('./src/user/userController.js');

mongoose.connect("mongodb://127.0.0.1:27017/StreamCinema", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("DB Connected");
}).catch((error) => {
  console.error("Error connecting to DB:", error);
});

app.use(cors(

  {
    origin: "http://localhost:4200"
  }
));
app.use('/user', routes); // Use the Router with the /api prefix

app.use(express.json());

// Add this line before defining any routes
app.use(session({
  secret: 'abc123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if you use HTTPS
}));

// Define your MongoDB schemas and models here

// Define your API routes
app.post('/user/create', userController.createUserControllerFn); // Use the userController for user registration
app.post('/user/login', userController.loginControllerFn); // Use the userController for user login
app.get('/user/user', userController.getUserControllerFn); // Get the userControler for user account
app.post('/user/logout', userController.logoutControllerFn); // Get the userControler for user logout

// Start the server
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
