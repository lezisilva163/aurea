const Product = require('../models/ProductModel');

class ProductController {
    async create(req, res) {
        try {
            const product = req.body;

            product.sizes.map(async item => {
                await Product.create({
                    "type" : item.type,
                    "name" : item.name,
                    "size" : item.size,
                    "quantity" : item.quantity,
                    "color" : item.color,
                    "value" : item.value,
                    "provider" : item.provider
                })
            });

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }

    async list(req, res) {
        try {
            const products = await Product.findAll();
            return res.status(200).json({'data' : products});
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }

    async update(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            product.quantity = req.body.quantity || product.quantity;
            product.value = req.body.value || product.value;
            product.size = req.body.size || product.size;
            await product.save();

            return res.status(202).json({'data' : product});
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }

    async delete(req, res) {
        try {
            const product = await Product.findByPk(req.query.id);

            await product.destroy();
            return res.status(204).json({})
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }
}

module.exports = new ProductController();