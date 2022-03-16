const express = require('express');
const LoginController = require('./src/Controller/LoginController');
const BalanceController = require ('./src/Controller/BalanceController');
const ProductController = require('./src/Controller/ProductController');

const router = express.Router();

router.get('/', LoginController.login);
router.get('/balance/calculate', BalanceController.balance);
router.get('/products/create', ProductController.posts);
router.post('/products/create', ProductController.create);

module.exports = router;