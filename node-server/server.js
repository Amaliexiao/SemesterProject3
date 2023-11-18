const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');  // Import the 'cors' middleware

const app = express();
const port = 3000;

// Enable CORS for all routes using middleware
app.use(cors());

// Parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/login_page")));

// Serve the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login_page/front_page_login.html"));
});

app.post("/login", (req, res) => {
  console.log(req.body); // Log the request body
  const { email, password } = req.body;
  // Your login logic here

  // Instead of sending a plain string, send JSON
  res.json({ message: "Login request received" });
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Your signup logic here

  // Instead of sending a plain string, send JSON
  res.json({ message: "Signup request received" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
