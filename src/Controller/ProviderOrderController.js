const ProviderOrder = require('../models/ProviderOrderModel');

class ProviderOrderController {
    async create(req, res){
        try {
            const order = req.body;
            console.log(req.body);
            // const data = req.body;
            // const productId = req.body.product_id;
            // const providerId = req.body.provider_id;
            // const totalValue = req.body.total_value;
            // const totalPaid = req.body.total_paid;
            // const userName = req.body.user_name;
            // const firstPayment = req.body.first_payment;
            // const firstPaymentDate = req.body.first_payment_date;
            // const secondPayment = req.body.second_payment;
            // const secondPaymentDate = req.body.second_payment_date;
            // const datasheet = req.body.datasheet;
            // const referenceProduct = req.body.reference_product;
            // const recievedOrder = req.body.received_order;
            // const deadline = req.body.deadline;

            // const order = await ProviderOrder.create({
            //     "product_id" : productId,
            //     "provider_id" : providerId,
            //     "total_value" : totalValue,
            //     "total_paid" : totalPaid,
            //     "user_name" : userName,
            //     "first_payment" : firstPayment,
            //     "first_payment_date" : firstPaymentDate,
            //     "second_payment" : secondPayment,
            //     "second_payment_date" : secondPaymentDate,
            //     "datasheet" : datasheet,
            //     "reference_product" : referenceProduct,
            //     "received_order" : recievedOrder,
            //     "deadline" : deadline
            // });

            return res.status(201).json({'data' : order});
        } catch (error) {
            return res.status(500).json({'error' : error.message});
        }
    }
}

module.exports = new ProviderOrderController();