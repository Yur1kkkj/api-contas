"use strict";

const express = require("express");
const cors = require("cors");
const api = express();
const InfoRoute = require('./routes/InfoRoute');
const contaRoute = require('./routes/ContaRoute');
const db = require("./db").connect();

db.then(() => {
    console.log("banco de dados conectado com sucesso...");
}).catch((error) => {
    console.error(error);
});

api.use(cors({ origin:"*"}));
api.use(express.json());
api.use('/info', InfoRoute);
api.use('/conta', contaRoute);

module.exports = api;
