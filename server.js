var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var path = __dirname + '/views/';
var pathResolver = require('path');
var httpRequest = require('request');
var loginHelper = require('./main/Login.js');

app.use(express.static(__dirname+ '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.sendFile(pathResolver.resolve(path + "index.html"));
});

router.get("/about", function (req, res) {
  res.sendFile(pathResolver.resolve(path + "about.html"));
});

router.post("/login", function (req, res) {
  let request = {
    user_name: req.body.user_name,
    password: req.body.password
  }
  loginHelper.login(request, (response) => {
    res.send(response);
  })
});

app.use("/", router);

app.use("*", function (req, res) {
  res.sendFile(pathResolver.resolve(path + "404.html"));
});

app.listen(9091, function () {
  console.log("Live at Port 9091");
});
