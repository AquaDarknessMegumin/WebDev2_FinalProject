const express = require("express");
const path = require("path");
const session = require('express-session');
const cors = require("cors");
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const secretKey = 'your-secret-key'; // Change this to a secure secret key

app.use(cors());
app.use(express.json());

// Use express-session for session management
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "denteasedb",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Logout route
app.get('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error logging out');
    } else {
      // Redirect to the home page after successful logout
      res.redirect('/');
    }
  });
});// Login route with JWT
app.post("/login", async (req, res) => {
  console.log("Received login request:", req.body);

  const { loginEmail, loginPassword } = req.body;

  console.log("Login email:", loginEmail);
  console.log("Login password:", loginPassword);

  const loginUserQuery = "SELECT * FROM `login/register` WHERE user_email = ?";
  db.query(loginUserQuery, [loginEmail], async (err, result) => {
    if (err) {
      console.error("Error logging in user:", err);
      res.status(500).send("Error logging in user");
    } else if (result.length > 0) {
      // User found, now compare hashed password
      const hashedPasswordInDB = result[0].user_password;

      console.log("CH",hashedPasswordInDB)

      try {
        const passwordMatch = await bcrypt.compare(loginPassword, hashedPasswordInDB);
        console.log(passwordMatch)
        if (passwordMatch) {
          console.log("=======================");
          console.log("User logged in successfully");
          console.log("User ID:", result[0].user_id);
          console.log("User Email:", result[0].user_email);

          // No need to log the hashed password during successful login
          // console.log("User password:", hashedPasswordInDB);

          const token = jwt.sign({ userId: result[0].user_id, userEmail: result[0].user_email }, secretKey);
          res.status(200).json({ token });
        } else {
          // Incorrect password
          console.log("=======================");
          console.log("Incorrect password");
          res.status(401).send("Invalid credentials");
        }
      } catch (bcryptError) {
        console.error("Error comparing passwords:", bcryptError);
        res.status(500).send("Error comparing passwords");
      }
    } else {
      // User not found
      console.log("=======================");
      console.log("User not found");
      res.status(401).send("Invalid credentials");
    }
  });
});
// Register route with JWT
app.post("/register", async (req, res) => {
  const {
    registerUsername,
    registerPhoneNumber,
    registerEmail,
    registerPassword,
  } = req.body;

  // Check if the email already exists
  const checkEmailQuery = "SELECT * FROM `login/register` WHERE user_email = ?";
  db.query(checkEmailQuery, [registerEmail], async (checkErr, checkResult) => {
    if (checkErr) {
      console.error("Error checking email:", checkErr);
      res.status(500).send("Error checking email");
    } else if (checkResult.length > 0) {
      // Email already exists, send an error response
      res.status(400).send("Email already exists. Please use a different email.");
    } else {
      // Email doesn't exist, proceed with registration

      try {
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(registerPassword, 10);

        // Insert the user into the database with the hashed password
        const insertUserQuery = "INSERT INTO `login/register` (user_name, user_phone, user_email, user_password) VALUES (?, ?, ?, ?)";
        db.query(insertUserQuery, [registerUsername, registerPhoneNumber, registerEmail, hashedPassword], (err, result) => {
          if (err) {
            console.error("Error registering user:", err);
            res.status(500).send("Error registering user");
          } else {
            // Generate a JWT token
            const token = jwt.sign({ userId: result.insertId, userEmail: registerEmail }, secretKey);

            // Log user information
            console.log("User registered successfully");
            console.log("User ID:", result.insertId);
            console.log("User Email:", registerEmail);

            // No need to log the hashed password during registration
            // console.log("User Password:", hashedPassword);

            console.log("=======================");
            res.status(200).json({ token });
          }
        });
      } catch (hashingError) {
        console.error("Error hashing password:", hashingError);
        res.status(500).send("Error hashing password");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
