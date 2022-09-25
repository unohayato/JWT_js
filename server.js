const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.listen(PORT, console.log("server is runnig"));