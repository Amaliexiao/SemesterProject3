const express = require("express");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../frontend/login_page")));

app.get("/", (req, res) => {
  const filepath = path.join(
    __dirname,
    "../frontend/login_page/front_page_login.html"
  );
  res.sendFile(filepath);
});

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
