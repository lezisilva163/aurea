const Provider = require('../models/ProviderModel');

class ProviderController {
    
    async create(req, res) {
        try {

            const company = req.body.company;
            const address = req.body.address;
            const whatsapp = req.body.whatsapp;
            const attendant = req.body.attendant;
            const cnpj = req.body.cnpj;

            const provider = await Provider.create({
                "company" : company,
                "address" : address,
                "whatsapp" : whatsapp,
                "attendant" : attendant,
                "cnpj" : cnpj
            });

            return res.status(201).json({ 'data' : provider });
        } catch (error) {
            return res.status(500).json({ 'error' : error.message });
        }
    }

    async update(req,res) {
        try {
            const provider = await Provider.findByPk(req.params.id);

            provider.company = req.body.company;
            provider.address = req.body.address;
            provider.whatsapp = req.body.whatsapp;
            provider.attendant = req.body.attendant;
            provider.cnpj = req.body.cnpj || provider.cnpj;

            await provider.save();

            return res.status(202).json({ 'data' : provider });
        } catch (error) {
            return res.status(500).json({ 'error' : error.message });
        }
    }

    async list(req,res) {
        try {
            const providers = await Provider.findAll();
            return res.status(200).json({'data' : providers});
        } catch (error) {
            return res.status(500).json({ 'error' : error.message });
        }
    }
}

module.exports = new ProviderController();