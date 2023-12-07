const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors"); // Import the 'cors' middleware
const pool = require('./db'); // connect to db


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
  const { email, password } = req.body;

  try {
    // Query the database to get the user by email
    const result = await pool.query('SELECT * FROM beermachine.users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, result.rows[0].password);

      if (passwordMatch) {
        // Store user information in the session
        req.session.user = result.rows[0];
        res.redirect("/overview");
      } else {
        res.status(401).send("Invalid credentials");
      }
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//get the ccs style and js for index file
app.use(express.static(path.join(__dirname, "../frontend")));
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

//hash passwords before inserting them in db
const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

app.post("/signup", async (req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({error: "Missing required fields"});
  }

  try {
    //wait for password hash
    const hashedPassword = await hashPassword(password);

    //query user into database
    const result = await pool.query('INSERT INTO beermachine.users (email, username, password) VALUES ($1, $2, $3) RETURNING *', [email, username, hashedPassword]);

    req.session.user = result.rows[0];

    res.redirect('/overview');
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
