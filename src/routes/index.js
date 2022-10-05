const express = require("express");
const router = express.Router();
const path = require("path");

const views = path.join(__dirname, "../views");

const isLogueado = require("../middlewares/isLogueado");

router.get("/", isLogueado, (req, res) => {
  res.sendFile(views + "/index.html");
});

router.get("/login", (req, res) => {
  res.sendFile(views + "/register.html");
});

module.exports = router;
