const express = require("express");
const { nextTick } = require("process");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");

// no db, just use this
const users = [];

// init ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.get("/login-auth", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
  } catch {}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
