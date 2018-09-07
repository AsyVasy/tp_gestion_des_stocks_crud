/* jshint esversion : 6 */

// @root/api/index.js

// ROUTAGE DE L'API
const api = function api() {

  const APIVersion = 1; // notre api est en version 1

  const database = require(__dirname + "/../model")({
    password: "", // définition du mot de passe de mySQL
    database: "intro_sql" // base de donnée cible
  });

  // IMPORT DES ROUTES DE l'API USER
  const routers = []; // on expotera ce tableau une fois rempli
  const userRouter = require("./user")(database.connection); // module api user

  ///////////////////////////////////
  // C'est à vous pour la suite ....
  ///////////////////////////////////

  // IMPORT DES ROUTES DE l'API COUNTRY
  // const countryRouter = require("./country")(database.connection);
  // IMPORT DES ROUTES DE l'API BILL
  // const billRouter = require("./bill")(database.connection);

  routers.push(userRouter); // aggrégation des routeurs dans un tableau

  return { // définition des propriétés publiques du module /api/index.js
    version: APIVersion,
    prefix: `/api/v${APIVersion}`,
    routers: routers
  }; // on récupère ces valeurs dans @root/index.js
};

module.exports = api;
