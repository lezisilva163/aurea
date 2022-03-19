const express = require('express');
const LoginController = require('./src/Controller/LoginController');
const BalanceController = require ('./src/Controller/BalanceController');
const ProductController = require('./src/Controller/ProductController');

const router = express.Router();

router.get('/', LoginController.login);

router.get('/balance/calculate', BalanceController.balance);
router.post('/balance/create', BalanceController.create);

router.post('/products/create', ProductController.create);
router.get('/products/list', ProductController.list);
router.delete('/products/delete', ProductController.delete);
router.patch('/products/:id/update', ProductController.update);

module.exports = router;