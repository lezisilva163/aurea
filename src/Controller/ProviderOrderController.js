const fs = require('fs');
const moment = require('moment');
const ProviderOrderModel = require('../models/ProviderOrderModel');
const db = require('./../../database');
const ProviderOrderEntity = require('./../entities/ProviderOrderEntity');


class ProviderOrderController {
    async create(req, res){
        try {
            const providerOrderEntity = new ProviderOrderEntity(ProviderOrderModel);

            const firstPayment = req.files['first_payment'];
            const datasheet = req.files['datasheet'];
            const data = req.body;

            await fs.writeFileSync(`./uploads/${firstPayment[0].originalname}`, firstPayment[0].buffer, (err) => {
                if (err) {
                    throw new Error('Não foi possível cadastrar o arquivo de primeiro pagamento');
                }
            });
            await fs.writeFileSync(`./uploads/${datasheet[0].originalname}`, datasheet[0].buffer), (err) => {
                if (err) {
                    throw new Error('Não foi possível cadastrar o arquivo da Ficha técnica');
                }
            };

            data.first_payment_date = moment(data.first_payment_date, "YYYY-MM-DD");
            data.second_payment_date = data.second_payment_date ? moment(data.second_payment_date, "YYYY-MM-DD") : null;
            data.first_payment = `./uploads/${firstPayment[0].originalname}`;
            data.second_payment = data.second_payment || null;
            data.datasheet = `./uploads/${datasheet[0].originalname}`;

            const order = await ProviderOrder.create(data);

            return res.status(201).json({'data' : order});
        } catch (error) {
            return res.status(500).json({'error' : error.message});
        }
    };

    async list (req, res){
        try {
            const orders = await db.query
            (`
                select po.*, pr.company, p.name 
                from provider_orders po 
                inner join products p on po.product_id = p.id 
                inner join providers pr on po.provider_id = pr.id`,
                { model: ProviderOrder }
            );

            return res.status(200).json({'data' : orders});
        } catch (error) {
            return res.status(500).json({'error' : error.message});
        }
    };
}

module.exports = new ProviderOrderController();