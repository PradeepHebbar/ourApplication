var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var path = __dirname + '/views/';
var pathResolver = require('path');
var httpRequest = require('request');
var loginHelper = require('./main/Login.js');
//var homeHelper = require('./main/HomePage.js');

app.use(express.static(__dirname + '/views'));
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

router.get("/contact", function (req, res) {
  res.sendFile(pathResolver.resolve(path + "contact.html"));
});

router.get("/homePage", function (req, res) {
  // homeHelper.getAllRepos((err, response) => {
  //   console.log(response);
  // });
  res.sendFile(pathResolver.resolve(path + "homePage.html"));
});

router.post("/login", function (req, res) {
  console.log("body", req.body)
  loginHelper.login(req, (err, response) => {
    res.send(response);
  });
 });

app.use("/404", function (req, res) {
  res.sendFile(pathResolver.resolve(path + "404.html"));
});

app.use("/", router);

app.listen(9091, function () {
  console.log("Live at Port 9091");
});
