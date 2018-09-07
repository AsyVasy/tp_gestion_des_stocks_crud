/* jshint esversion : 6 */

// @root/index.js

const express = require("express");
const port = 9360;
const app = express();
const baseURL = `http://localhost:${port}`;
const api = require(__dirname + "/api")(app);


var moment = require('moment');

// APP CONFIG !!!
app.use(api.prefix, api.routers);
app.set("view engine", "ejs"); // CHECK THE DOC http://ejs.co/
app.set("views", __dirname + "/view"); //  précise à express le dossier des vues
// définition de ressources statiques...
app.use("/ejs", express.static(__dirname + "/node_modules/ejs"));

app.use("/jquery", express.static(__dirname + "/node_modules/jquery"));

app.use(express.static(__dirname + "/public"));

//app.use("js", express.static(__dirname + "/src/js"));

// TEMPLATE VARS !!!
// Accessibles dans tout le template via app.locals (API express)
app.locals.site = {};
app.locals.baseURL = baseURL;
app.locals.site.title = "TP - Getsion des stocks CRUD";
app.locals.site.description = "application utilisant node, express JS, ejs et mysql.";
app.locals.site.nav = [
  {label: "accueil", route: "/"},
//  {label: "les pays", route: "country"},
//  {label: "les utilisateurs", route: "user"},
//  {label: "les factures", route: "bill"},
//  {label: "nous-contacter", route: "contact"},
];

// ROUTES DES PAGES DE l"APPLICATION
app.get("/", function(req, res) {
  res.render("index", {
      nom: "lounes"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});

//app.get("/country", function(req, res) {
//  res.render("country", {
//    title: "Country !!!"
//  });
//});

//app.get("/user", function(req, res) {
//  res.render("user", {
//    title: "Manage Users"
//  });
//});

//app.get("/bill", function(req, res) {
//  res.render("bill", {
//    title: "Manage Bills"
//  });
//});

app.get("/contact", function(req, res) {
  res.render("contact", {
    title: "Nous contacter"
  });
});

app.listen(port, function() {
  console.log("node server started on port " + port);
});
