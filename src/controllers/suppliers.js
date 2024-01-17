const knex = require('../services/connection');
require('dotenv').config();

const getSuppliers = async (req, res) => {
    const { consumption } = req.query;

    if (!consumption) {
        return res.status(400).json({ "mensagem": "Informe o valor do consumo." })
    }

    if (consumption <= 0) {
        return res.status(400).json({ "mensagem": "O valor do consumo é inválido." })
    }

    try {
        const response = await knex('fornecedores').whereRaw(`${consumption} >= limite_min_kwh`);

        return res.json(response);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getSuppliers
}