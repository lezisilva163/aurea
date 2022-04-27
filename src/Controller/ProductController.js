const ProductEntity = require('../entities/ProductEntity');
const ProductModel = require('../models/ProductModel');

class ProductController {
    async create(req, res) {
        try {
            const product = new ProductEntity(ProductModel);
            req.body.sizes.map(async item => {
                product.setType(req.body.type);
                product.setName(req.body.name);
                product.setSize(item.size);
                product.setQuantity(item.quantity);
                product.setColor(req.body.color);
                product.setValue(req.body.value);
                product.setProvider(req.body.provider);
                await product.create();
            });

            return res.status(201).json({});
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }

    async list(req, res) {
        try {
            const products =  new ProductEntity(ProductModel);
            const data = await products.list();

            return res.status(200).json({'data' : data});
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }

    async update(req, res) {
        try {
            const product =  new ProductEntity(ProductModel);
            const data = await product.find(req.params.id);
            data.quantity = req.body.quantity || data.quantity;
            data.value = req.body.value || data.value;
            data.size = req.body.size || data.size;
            await data.save();
            
            return res.status(202).json({'data' : data});
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }

    async delete(req, res) {
        try {
            //const product = await Product.findByPk(req.query.id);
            const product =  new ProductEntity(ProductModel);
            await product.delete(req.params.id);

            return res.status(204).json({})
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }
}

module.exports = new ProductController();