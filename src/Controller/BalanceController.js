const Balance = require('../models/BalanceModel');

class BalanceController {

    simulate(req, res){
        try {
            const monthValueSell = req.body.month_value_sell;
            const retailMarkup = req.body.retail_markup;
            const financeCost = req.body.finance_cost;
            const operationalCost = req.body.operational_cost;
            const employeeCost = req.body.employee_cost;
            const taxCNPJ = req.body.tax_cnpj;
            const site = req.body.site;
            const packages = req.body.packages;
            const gifts = req.body.gifts;
            const freightCost = req.body.freight_cost;
            const cac = req.body.cac;

            const calcProductCost = (monthValueSell / retailMarkup);
            const calcFinanceCost = (monthValueSell * financeCost);
            const calcCac = (monthValueSell * cac);
            const calcProfit = ((((((((((monthValueSell - calcProductCost) - calcFinanceCost) - operationalCost) - employeeCost) - taxCNPJ) - site) - packages) - gifts) - freightCost) - calcCac);
            return res.status(200).json({'data' : calcProfit})
        } catch (error) {
            return res.status(500).json({'result' : error.message})
        }
    }

    async create(req, res) {
        try {
            const monthValueSell = req.body.month_value_sell;
            const retailMarkup = req.body.retail_markup;
            const financeCost = req.body.finance_cost;
            const operationalCost = req.body.operational_cost;
            const employeeCost = req.body.employee_cost;
            const taxCNPJ = req.body.tax_cnpj;
            const site = req.body.site;
            const packages = req.body.packages;
            const gifts = req.body.gifts;
            const freightCost = req.body.freight_cost;
            const cac = req.body.cac;

            const calcProductCost = (monthValueSell / retailMarkup);
            const calcFinanceCost = (monthValueSell * financeCost);
            const calcCac = (monthValueSell * cac);
            const calcProfit = ((((((((((monthValueSell - calcProductCost) - calcFinanceCost) - operationalCost) - employeeCost) - taxCNPJ) - site) - packages) - gifts) - freightCost) - calcCac);

            const balance = await Balance.create({
                "month_value_sell" : monthValueSell,
                "retail_markup" : retailMarkup,
                "finance_cost" : financeCost,
                "operational_cost" : operationalCost,
                "employee_cost" : employeeCost,
                "tax_cnpj" : taxCNPJ,
                "site" : site,
                "packages" : packages,
                "gifts" : gifts,
                "freight_cost" : freightCost,
                "cac" : cac,
                "calc_profit" : calcProfit
            });

            return res.status(201).json({'data' : balance});
         } catch (error) {
             return res.status(500).json({'result' : error.message});
        }
    }
}

module.exports = new BalanceController();
//const defictTotalOfSell = calcProductCost + calcFinanceCost + operationalCost + employeeCost + taxCNPJ + site + packages + gifts + freightCost + calcCac;