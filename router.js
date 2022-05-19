const express = require('express');
const multer = require('multer');
const upload = multer({});
const verifyJwt = require('./src/configs/utils');
const LoginController = require('./src/Controller/LoginController');
const BalanceController = require ('./src/Controller/BalanceController');
const ProductController = require('./src/Controller/ProductController');
const ProviderController = require('./src/Controller/ProviderController');
const ProviderOrderController = require('./src/Controller/ProviderOrderController');
const UserController = require('./src/Controller/UserController');
const ProductExchangeController = require('./src/Controller/ProductExchangeController');

const router = express.Router();

router.post('/login', LoginController.login);
router.post('/logout', LoginController.logout);

router.get('/', verifyJwt, (req, res) => {
    return res.json({'data' : 'welcome'});
});

router.post('/balance/simulate', verifyJwt, BalanceController.simulate);
router.post('/balance/create', verifyJwt, BalanceController.create);

router.post('/products/create', verifyJwt, ProductController.create);
router.get('/products/list', verifyJwt, ProductController.list);
router.delete('/products/:id/delete', verifyJwt, ProductController.delete);
router.patch('/products/:id/update', verifyJwt, ProductController.update);

router.post('/provider/create', verifyJwt, ProviderController.create);
router.patch('/provider/:id/update', verifyJwt, ProviderController.update);
router.get('/provider/list', verifyJwt, ProviderController.list);

router.post('/provider-order/create', verifyJwt, upload.fields([{name : 'first_payment'}, {name : 'datasheet'}]), ProviderOrderController.create);
router.get('/provider-order/list', verifyJwt, ProviderOrderController.list);

router.post('/user/create', verifyJwt, UserController.create);

router.post('/product-exchange/create', verifyJwt, ProductExchangeController.create);

module.exports = router;