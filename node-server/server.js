const express = require("express"); //express manages the routing, cookies and session
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt"); //bcrypt is the password hasher
const path = require("path");
const cors = require("cors"); //cors is api safety module, protocol for it allows us to access domains outside the nodejs domain, i.e the spring server is the same we use when we use @CrossOrigin on spring
const pool = require('./db'); // connect to db


const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "Beer-SESSION-KEY123123",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../frontend/login_page")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/login_page/front_page_login.html")
  );
});

//checks if user is authenticated i.e logged in
const authenticate = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};


//checks login info and matches it to database
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM beermachine.users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      const passwordMatch = await bcrypt.compare(password, result.rows[0].password);

      if (passwordMatch) {
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

//get the css style and js for index file
app.use(express.static(path.join(__dirname, "../frontend")));
app.get("/overview", authenticate, (req, res) => {
  const htmlFilePath = path.join(__dirname, "../frontend", "index.html");
  res.sendFile(htmlFilePath);
});

app.get("/logout", (req, res) => {
  // destroys session when logging out
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

//signup functionality, adds new users values to db, it is mostly for ease of use for devs.
app.post("/signup", async (req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({error: "Missing required fields"});
  }
  try {
    const hashedPassword = await hashPassword(password);
    const result = await pool.query('INSERT INTO beermachine.users (email, username, password) VALUES ($1, $2, $3) RETURNING *', [email, username, hashedPassword]);
    req.session.user = result.rows[0];
    res.redirect('/overview');
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }

});

// start starts on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
