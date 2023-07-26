var userModel = require('./userModel');

var createUserControllerFn = async (req, res) =>  {
    try {
      const body = req.body;
      const userModelData = new userModel();
      userModelData.firstName = body.firstName;
      userModelData.lastName = body.lastName;
      userModelData.email = body.email;
      userModelData.password = body.password;
      userModelData.address = body.address;
      userModelData.phone = body.phone;
      

      await userModelData.save();
      console.log(userModelData);

      res.status(200).send({
        status: true,
        message: "User created successfully",
      });
      
    } catch (error) {
      res.status(400).send(error);
    }
  }

  var loginControllerFn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'User with this email not found' });
      }
  
      // Check if the provided password matches the user's stored password
      if (user.password !== password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      // Store the user data in the session after successful login
      req.session.user = user;
  
      // You can choose to send back user data or just a success message
      res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

var getUserControllerFn = async (req, res) => {
  try {
    const { email } = req.query; // Use req.query to get the email parameter
    console.log('Email:', email);

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User Data:', user); // Log the user data
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

var logoutControllerFn = async (req, res) => {
  try {
    // Clear the user session on logout
    req.session.destroy((err) => {
      if (err) {
        console.error('Logout error:', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the userController object with all functions
module.exports = { createUserControllerFn, loginControllerFn, getUserControllerFn, logoutControllerFn};
