const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, console.log("server is runnig"));

app.post("/register", (req, res) => {
  const payload = {
    name: req.body.username,
    email: req.body.email,
  };

  const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

  const body = {
    username: req.body.username,
    email: req.body.username,
    token: token,
  };

  return console.log(res.status(200).send(body).json());

})

app.get("/login", (req, res) => {
  res.status(200).json({
    msg: "承認に成功しました。"
  })
})
