var express = require('express')
var app=express()
app.use(express.json())
var cors=require("cors")
app.use(cors())
const session=require("express-session")

// Create Express application



main().catch(err => console.log(err));

// Define User schema
const userSchema = new mongoose.Schema({
  fnam: String,
  lnam: String,
  eml: String,
  pss: String,
  role: String
});

const User = mongoose.model('User', userSchema);
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

    // Hash the password
    const hashedPassword = await bcrypt.hash(pss, 10);

    // Create new user
    const newUser = new User({
      fnam,
      lnam,
      eml,
      pss: hashedPassword,
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


app.get("mongodb+srv://adil315:adil3105@cluster0.ddmrjkm.mongodb.net/?retryWrites=true&w=majority",(res,req)=>{
  
})
// Start the server
const port = 9000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

