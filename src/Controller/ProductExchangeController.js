const ProductExchangeEntity = require('../entities/ProductExchangeEntity');
const ProductExchangeModel = require ('../models/ProductExchangeModel');

class ProductExchangeController {
    async create(req, res){
        try {

            const productExchange = new ProductExchangeEntity(ProductExchangeModel);

            productExchange.setName(req.body.name);
            productExchange.setEmail(req.body.email);
            productExchange.setPhone(req.body.phone);
            productExchange.setDate(req.body.date);
            productExchange.setProductId(req.body.product_id);
            productExchange.setDescription(req.body.description);
            productExchange.setProductImage(req.body.product_image);
            await productExchange.create();

            return res.status(201).json({ 'data' : productExchange });
        } catch (error) {
            return res.status(500).json({ 'erro' : error.message });
        }
    }
}

module.exports = new ProductExchangeController();