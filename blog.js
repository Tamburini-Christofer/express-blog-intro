import { triggerAsyncId } from "async_hooks";
import chalk from "chalk";

//todo Creazione di una variabile che possa recuperare express
const express = require("express");

//todo Creiamo una variabile a cui assegnare express
const server = express();

//todo Riferimento porta del server
const PORT = 3000;

//todo Impostiamo la prima rotta, quella index
server.get("/", (req, res) => {
  res.send(`<h1> Server del mio blog </h1>`);
});

//todo Importo l'array che l'ho messo in un altro file e l'ho esportato come modulo
const posts = require("./posts");

//todo Creo la rotta bacheca
server.get("/bacheca", (req, res) => {
    res.json({posts});
});

