var express = require("express");
var path=require('path');
var passport = require("passport");
var LocalStrategy  = require("passport-local");
var passportLocalMongoose  = require("passport-local-mongoose");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
 mongoose.connect("mongodb://localhost/deevsoft_intern");
app.use(bodyParser.urlencoded({extended : true}));
app.use('', express.static(path.join(__dirname + '')));
app.set('views', path.join(__dirname, 'views'));
app.use(require("express-session")({
    secret: "books page",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/" , function(req,res){
  res.render("score.ejs");
});

app.listen("5086" , function(req,res){
  console.log("server is started");
});