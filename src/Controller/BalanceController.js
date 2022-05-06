const BalanceEntity = require('../entities/BalanceEntity');
const BalanceModel = require('../models/BalanceModel');

class BalanceController {

    simulate(req, res){
        try {
            const balance = new BalanceEntity(BalanceModel);
            balance.setMonthValueSell(req.body.monthValueSell);
            balance.setRetailMarkup(req.body.retailMarkup);
            balance.setFinanceCost(req.body.financeCost);
            balance.setOperationalCost(req.body.operationalCost);
            balance.setEmployeeCost(req.body.employeeCost);
            balance.setTaxCnpj(req.body.taxCNPJ);
            balance.setSite(req.body.site);
            balance.setPackages(req.body.packages);
            balance.setGifts(req.body.gifts);
            balance.setFreightCost(req.body.freightCost);
            balance.setCac(req.body.cac);

            const productCost = balance.calculateProductCost();
            const financeCost = balance.calculateFinanceCost();
            const cac = balance.calculateCac();
            const profit = balance.calculateProfit(productCost, financeCost, cac);
            balance.setCalcProfit(profit);

            return res.status(201).json({'data' : balance});
        } catch (error) {
            return res.status(500).json({'result' : error.message})
        }
    }

    async create(req, res) {
        try {
            const balance = new BalanceEntity(BalanceModel);
            balance.setMonthValueSell(req.body.monthValueSell);
            balance.setRetailMarkup(req.body.retailMarkup);
            balance.setFinanceCost(req.body.financeCost);
            balance.setOperationalCost(req.body.operationalCost);
            balance.setEmployeeCost(req.body.employeeCost);
            balance.setTaxCnpj(req.body.taxCNPJ);
            balance.setSite(req.body.site);
            balance.setPackages(req.body.packages);

            balance.setGifts(req.body.gifts);
            balance.setFreightCost(req.body.freightCost);
            balance.setCac(req.body.cac);

            const productCost = balance.calculateProductCost();
            const financeCost = balance.calculateFinanceCost();
            const cac = balance.calculateCac();
            const profit = balance.calculateProfit(productCost, financeCost, cac);
            balance.setCalcProfit(profit);
            const newBalance = await balance.create();

            return res.status(201).json({'data' : newBalance});
         } catch (error) {
             return res.status(500).json({'result' : error.message});
        }
    }
}

module.exports = new BalanceController();
//const defictTotalOfSell = calcProductCost + calcFinanceCost + operationalCost + employeeCost + taxCNPJ + site + packages + gifts + freightCost + calcCac;