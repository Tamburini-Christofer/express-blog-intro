//todo Creazione di una variabile che possa recuperare express
const express = require('express');

//todo Creiamo una variabile a cui assegnare express
const server = express();

//todo Riferimento porta del server
const PORT = 3000;

//todo Impostiamo la prima rotta, quella index
server.get('/', (req, res) => {
    res.send("Benvenuto nel mio blog!");
});