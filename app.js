var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var User = require("./models/user");
// Uncomment when model has been created
// var Wishlist = require("./models/wishlist");

mongoose.connect(
  "mongodb+srv://user:3wQN4sc3OGC3hlSc@cluster0-amz9t.gcp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.redirect("/home");
});

app.get("/home", function (req, res) {
  res.render("homepage.ejs");
});

app.get("/error", function (req, res) {
  res.render("error.ejs");
});

//Accounts Page
app.get("/accounts", function (req, res) {
  res.render("accounts.ejs");
});

app.get("*", function (req, res) {
  res.send("NO MATCH FOUND");
});

app.listen(3000, function () {
  console.log("SERVER STARTED");
});
