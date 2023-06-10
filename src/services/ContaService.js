'use strict'

let contas = require("../contasdb");
const contaModel = require("../models/contaModel")

module.exports = {
    listarTodasContas: async () => {
        try {
            const contasCadastradas = await contaModel.find();
            return contasCadastradas;
        } catch (error) {
            return{
                mensagem: error,
                sucess: false,
                status: 404,
            }
        }
       
    },
    buscarPorId: async (id) => {
        try {
            const contaEncontrada = await contaModel.findOne({_id: id});
            return contaEncontrada;
        } catch (error) {
            return { 
                mensagem: error,
                sucess: false,
                status: 404,
            };
        }
    },
    
    incluirConta: async (conta) => {
        try {
            const novaConta = await contaModel.create(conta);
            return novaConta;
        } catch (error) {
            return{
                mensagem: error,
                sucess: false,
                status: 404,
            }
        }
    },

    editaConta:(request, response) => {
        const contaId = Number(request.params.id);
    
        const indexContaEncontrada = contas.findIndex(
            (conta) => conta.id === contaId
        );
    
        if (indexContaEncontrada === -1) {
            return response.status(404).json({ mensagem: "Conta não encontrada." });
        }
    
        let novaConta = request.body;
    
        contas[indexContaEncontrada] = { ...novaConta };
    
        response.json({ mensage: "Conta alterada com sucesso" });
    }
};
