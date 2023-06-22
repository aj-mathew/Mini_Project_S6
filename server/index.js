// Required dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
var cors=require("cors")
app.use(cors())
const session=require("express-session")

// Create Express application

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure body-parser middleware

// Connect to MongoDB
mongoose.connect('mongodb+srv://adil315:adil3105@cluster0.ddmrjkm.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define User schema
const userSchema = new mongoose.Schema({
  fnam: String,
  lnam: String,
  eml: String,
  pss: String,
  role: String
});

const parkingspotSchema = new mongoose.Schema({
  name: String,
  description: String,
  bookingstatus: Boolean
});

const formdataSchema =new mongoose.Schema({
  carRegistration:String,
  ownerName:String,
  ownerNumber:String,
  bookingDate:Date,    //same for booking 
  bookingStartTime:String,
  bookingEndTime:String,
  selectedSpot:String
});

const User = mongoose.model('User', userSchema);
const Spot = mongoose.model('Spot',parkingspotSchema)
const Form = mongoose.model('Form',formdataSchema)
app.use(
  session({
    secret: 'f5bdeca5d7f6893de827d2b7afcaa66fb2dec349c734bed749b3e75b737072aa', // Replace with your secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);

// const Owner = mongoose.model('Owner', userSchema);
// app.use(
//   session({
//     secret: 'f5bdeca5d7f6893de827d2b7afcaa66fb2dec349c734bed749b3e75b737072aa', // Replace with your secret key for session encryption
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// SIGN UP
app.post('/signup', async (req, res) => {
  try {
    const { fnam,lnam,eml,pss,role} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ eml });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    //to make role selection mandatory
    if(!role && !fnam && !lnam && !eml && !pss)
    {
      return res.status(400).json({message:"Missing Field!"})
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(pss, 10);

    // Create new user
    const newUser = new User({
      fnam,
      lnam,
      eml,
      pss: hashedPassword,    //same for booking 
      role
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Success' });
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//booking form
app.post('/bookingform', async (req, res) => {
  try {
    const { carRegistration,ownerName,ownerNumber,bookingDate,bookingStartTime,bookingEndTime,selectedSpot } = req.body;

    // Check if user already exists
    const existingCar = await Form.findOne({ carRegistration });
    if (existingCar) {
      return res.status(400).json({ message: 'Cannot book more than one spot for a car' });
    }

    //to make role selection mandatory
    if(!carRegistration && !ownerName && !ownerNumber && !bookingDate && !bookingStartTime && !bookingEndTime &&!selectedSpot)
    {
      return res.status(400).json({message:"Missing Field!"})
    }

    // Create new user
    const newCar = new Form({
      carRegistration,
      ownerName,
      ownerNumber,
      bookingDate,    //same for booking 
      bookingStartTime,
      bookingEndTime,
      selectedSpot
    });

    // Save the user to the database
    await newCar.save();

    await Spot.updateOne({
      name:selectedSpot
    },{
      bookingstatus:true
    })

    res.status(201).json({ message: 'Success' });
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//create spot

app.post('/createspot', async (req, res) => {
  try {
    const { spotName,description } = req.body;
    console.log(req.body)

    // Check if user already exists
    const existingSpot = await Spot.findOne({ name:spotName });
    if (existingSpot) {
      return res.status(400).json({ message: 'Spot already exist' });
    }

    //to make role selection mandatory
    if(!spotName && !description)
    {
      return res.status(400).json({message:"Missing Field!"})
    }

    // Create new user
    const newSpot = new Spot({
      name:spotName,
      description:description,
      bookingstatus: false
    });

    // Save the user to the database
    await newSpot.save();

    res.status(201).json({ message: 'Success' });
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// LOGIN
app.post('/login', async (req, res) => {
  const { eml, pss } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ eml });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(pss, user.pss);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful', userinfo: user});
  } catch (error) {
    console.error('Error logging in', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get("/getspots",async(req,res)=>{
  const data = await Spot.find({
    bookingstatus: false
  });
  return res.status(200).json(data)
})
// Start the server
const port = 9000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

