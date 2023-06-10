'use strict'

const express = require("express");
const router = express.Router();
let contas = require("../contasdb");
const contaService = require('../services/ContaService')

router.get("", async (request, response) => {
    const contas = await contaService.listarTodasContas();
    response.json(contas);
});

router.get("/:id", async (request, response) => {
    try {
        const contaPesquisada = await contaService.buscarPorId(request.params.id)
        return response.json(contaPesquisada);
    } catch (error) {
        return response.status(404).json({
            message: " aconteceu um erro: " + error,
            sucess: false,
            status: 404,
        });
    }
});

router.post("", async (request, response) => {
    const resposta = await contaService.incluirConta(request.body);
    return response.json(resposta);
});

router.put("/:id", contaService.editaConta);

module.exports = router;
