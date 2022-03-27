const express = require('express');
const multer = require('multer');
const upload = multer({});
const LoginController = require('./src/Controller/LoginController');
const BalanceController = require ('./src/Controller/BalanceController');
const ProductController = require('./src/Controller/ProductController');
const ProviderController = require('./src/Controller/ProviderController');
const ProviderOrderController = require('./src/Controller/ProviderOrderController');


const router = express.Router();

router.get('/', LoginController.login);

router.post('/balance/simulate', BalanceController.simulate);
router.post('/balance/create', BalanceController.create);

router.post('/products/create', ProductController.create);
router.get('/products/list', ProductController.list);
router.delete('/products/delete', ProductController.delete);
router.patch('/products/:id/update', ProductController.update);

router.post('/provider/create', ProviderController.create);
router.patch('/provider/:id/update', ProviderController.update);
router.get('/provider/list', ProviderController.list);

router.post('/provider-order/create', upload.fields([{name : 'first_payment'}, {name : 'datasheet'}]), ProviderOrderController.create);
router.get('/provider-order/list', ProviderOrderController.list);

module.exports = router;