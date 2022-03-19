class ProductController {
    posts(req, res){
        const shirt = [
            {name: 'Áurea', size: 'M'}
        ];
        return res.status(200).send(shirt);
    }
    create(req, res) {
        try {
            const shirt = req.body;
            //posts.push(shirt);
            return res.status(201).json({'criado' : shirt});
        } catch (error) {
            return res.status(500).json({'erro' : error.message});
        }
    }
}

module.exports = new ProductController();