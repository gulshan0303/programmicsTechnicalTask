const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

// Signup controller
exports.signup = async (req, res, next) => {
 
  try {
        const {email, password} = req.body;
       const existingUser = await User.findOne({email})
       if(existingUser){
          res.status(500).json({success:false,message:"this email is already registered!!"})
       }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({success:true, message: 'User created successfully',user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Login controller
exports.login = async (req, res, next) => {
  try {
    
    const {email,password} = req.body;

    // Find the user with the given email
    const user = await User.findOne({ email});

    if (!user) {
      return res.status(401).json({ message: 'Invalid Credential' });
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid Credential' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({success:true, message:"Login Success!!", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

