const express = require("express");
const path = require("path");
const session = require('express-session');
const cors = require("cors");
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Use express-session for session management
app.use(session({
  secret: 'your-secret-key',
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
});


// Login route
app.post("/login", (req, res) => {
  console.log("Received login request:", req.body);

  const { loginEmail, loginPassword } = req.body;

  const loginUserQuery = "SELECT * FROM `login/register` WHERE user_email = ? AND user_password = ?";
  db.query(loginUserQuery, [loginEmail, loginPassword], (err, result) => {
    if (err) {
      console.error("Error logging in user:", err);
      res.status(500).send("Error logging in user");
    } else if (result.length > 0) {
      console.log("User logged in successfully");
      res.status(200).send("User logged in successfully");
    } else {
      // User not found or incorrect password
      res.status(401).send("Invalid credentials");
    }
  });
});

// Register route
app.post("/register", (req, res) => {
  const {
    registerUsername,
    registerPhoneNumber,
    registerEmail,
    registerPassword,
  } = req.body;

  // Check if the email already exists
  const checkEmailQuery = "SELECT * FROM `login/register` WHERE user_email = ?";
  db.query(checkEmailQuery, [registerEmail], (checkErr, checkResult) => {
    if (checkErr) {
      console.error("Error checking email:", checkErr);
      res.status(500).send("Error checking email");
    } else if (checkResult.length > 0) {
      // Email already exists, send an error response
      res.status(400).send("Email already exists. Please use a different email.");
    } else {
      // Email doesn't exist, proceed with registration
      const insertUserQuery = "INSERT INTO `login/register` (user_name, user_phone, user_email, user_password) VALUES (?, ?, ?, ?)";
      db.query(insertUserQuery, [registerUsername, registerPhoneNumber, registerEmail, registerPassword], (err, result) => {
        if (err) {
          console.error("Error registering user:", err);
          res.status(500).send("Error registering user");
        } else {
          console.log("User registered successfully");
          res.status(200).send("User registered successfully");
        }
      });
    }
  });
});


///





















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
