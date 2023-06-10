'use strict'

const express = require("express");
const router = express.Router()

router.get("", (request, response) => {
    response.json({
      nome: "API Contas",
      status: "OK",
    });
  });
  
  module.exports = router;