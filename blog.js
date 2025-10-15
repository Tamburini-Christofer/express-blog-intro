import { triggerAsyncId } from "async_hooks";
import chalk from "chalk";

//todo Creazione di una variabile che possa recuperare express
const express = require('express');

//todo Creiamo una variabile a cui assegnare express
const server = express();

//todo Riferimento porta del server
const PORT = 3000;

//todo Impostiamo la prima rotta, quella index
server.get('/', (req, res) => {
    res.send(`<h1> Server del mio blog </h1>`);
});

//todo Creiamo una seconda rotta, quella dei post
server.get('/posts', (req, res) => {
    [
        {
            id: 1,
            title: "Il ciambellone",
            content: "",
            image: "./images/ciambellone.jpeg",
            tags: [],
        }, 
           {
            id: 2,
            title: "I cracker alla barbabietola",
            content: "",
            image: "./images/cracker_barbabietola.jpeg.jpeg",
            tags: [],
        }, 
           {
            id: 3,
            title: "Il buonissimo pane fritto dolce",
            content: "",
            image: "./images/pane_fritto_dolce.jpeg",
            tags: [],
        }, 
           {
            id: 4,
            title: "La pasta alla barbabietola",
            content: "",
            image: "./images/pasta_barbabietola.jpeg",
            tags: [],
        }, 
           {
            id: 5,
            title: "La torta paesana",
            content: "",
            image: "./images/torta_paesana.jpeg",
            tags: [],
        }, 
    ]
});