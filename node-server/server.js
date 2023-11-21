const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors"); // Import the 'cors' middleware

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "Session-key-1891389217",
    resave: true,
    saveUninitialized: true,
  })
);

const users = [
  {
    id: 1,
    username: "user1@gmail.com",
    password: "$2b$10$l.i4CzWFj6wS3IiuIZLeDudVWg.bEegPdijwumOCBLZh7ZlRPmNeG",
  },
  {
    id: 2,
    username: "user2",
    password: "$2b$10$afVX.Zb0Rc0S1/E.kJ3IBuMl7/q7p3SGHV2pHH2cLCZz7wvL2VYSG",
  },
];
// Parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/login_page")));

// Serve the login page
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/login_page/front_page_login.html")
  );
});

// Middleware for authentication
const authenticate = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is valid
  const user = users.find((u) => u.email === username);

  if (user) {
    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Store user information in the session
      req.session.user = user;
      app.use(express.static(path.join(__dirname, "../frontend")));
      res.redirect("/overview");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.get("/overview", authenticate, (req, res) => {
  const htmlFilePath = path.join(__dirname, "../frontend", "index.html");
  res.sendFile(htmlFilePath);
});

app.get("/logout", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.send("Logout successful");
    }
  });
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Your signup logic here

  // Instead of sending a plain string, send JSON
  res.json({ message: "Signup request received" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
