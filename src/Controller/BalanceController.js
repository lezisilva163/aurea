class BalanceController {

    balance(req, res){
        try {
            const monthValueSell = req.query.monthValueSell;
            const retailMarkup = req.query.retailMarkup;
            //const shopKeeperMarkup = req.query.shopKeeperMarkup;
            const financeCost = req.query.financeCost;
            const operationalCost = req.query.operationalCost;
            const employeeCost = req.query.employeeCost;
            const taxCNPJ = req.query.taxCNPJ;
            const site = req.query.site;
            const packages = req.query.packages;
            const gifts = req.query.gifts;
            const freightCost = req.query.freightCost;
            const cac = req.query.cac;

            const calcProductCost = (monthValueSell / retailMarkup);
            const calcFinanceCost = (monthValueSell * financeCost);
            const calcCac = (monthValueSell * cac);
            const calcProfit = ((((((((((monthValueSell - calcProductCost) - calcFinanceCost) - operationalCost) - employeeCost) - taxCNPJ) - site) - packages) - gifts) - freightCost) - calcCac);
            return res.status(200).json({'profit' : calcProfit})
        } catch (error) {
            return res.status(500).json({'result' : error.message})
        }
    }

    create(req, res){
        try {
            const monthValueSell = req.query.monthValueSell;
            const retailMarkup = req.query.retailMarkup;
            //const shopKeeperMarkup = req.query.shopKeeperMarkup;
            const financeCost = req.query.financeCost;
            const operationalCost = req.query.operationalCost;
            const employeeCost = req.query.employeeCost;
            const taxCNPJ = req.query.taxCNPJ;
            const site = req.query.site;
            const packages = req.query.packages;
            const gifts = req.query.gifts;
            const freightCost = req.query.freightCost;
            const cac = req.query.cac;

            const calcProductCost = (monthValueSell / retailMarkup);
            const calcFinanceCost = (monthValueSell * financeCost);
            const calcCac = (monthValueSell * cac);
            const calcProfit = ((((((((((monthValueSell - calcProductCost) - calcFinanceCost) - operationalCost) - employeeCost) - taxCNPJ) - site) - packages) - gifts) - freightCost) - calcCac);
            return res.status(200).json({'profit' : calcProfit})
        } catch (error) {
            return res.status(500).json({'result' : error.message})
        }
    }
}

module.exports = new BalanceController();
//const defictTotalOfSell = calcProductCost + calcFinanceCost + operationalCost + employeeCost + taxCNPJ + site + packages + gifts + freightCost + calcCac;