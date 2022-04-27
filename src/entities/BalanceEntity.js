class BalanceEntity {
    constructor(balanceModel){
        this.balanceModel = balanceModel;
    }

    setMonthValueSell(monthValueSell){
        this.monthValueSell = monthValueSell;
    }

    getMonthValueSell(){
        return this.monthValueSell;
    }

    setRetailMarkup(retailMarkup){
        this.retailMarkup = retailMarkup;
    }

    getRetailMarkup(){
        return this.retailMarkup;
    }

    setFinanceCost(financeCost){
        this.financeCost = financeCost;
    }

    getFinanceCost(){
        return this.financeCost;
    }

    setOperationalCost(operationalCost){
        this.operationalCost = operationalCost;
    }

    getOperationalCost(){
        return this.operationalCost;
    }

    setEmployeeCost(employeeCost){
        this.employeeCost = employeeCost;
    }

    getEmployeeCost(){
        return this.employeeCost;
    }

    setTaxCnpj(taxCnpj){
        this.taxCnpj = taxCnpj;
    }

    getTaxCnpj(){
        return this.taxCnpj;
    }

    setSite(site){
        this.site = site;
    }

    getSite(){
        return this.site;
    }

    setPackages(packages){
        this.packages = packages;
    }

    getPackages(){
        return this.packages;
    }

    setGifts(gifts){
        this.gifts = gifts;
    }

    getGifts(){
        return this.gifts;
    }

    setFreightCost(freightCost){
        this.freightCost = freightCost;
    }

    getFreightCost(){
        return this.freightCost;
    }

    setCac(cac){
        this.cac = cac;
    }

    getCac(){
        return this.cac;
    }

    setCalcProfit(calcProfit){
        this.calcProfit = calcProfit;
    }

    getCalcProfit(){
        return this.calcProfit;
    }

    async create(){
        return await this.balanceModel.create({
            "month_value_sell" : this.monthValueSell,
            "retail_markup" : this.retailMarkup,
            "finance_cost" : this.financeCost,
            "operational_cost" : this.operationalCost,
            "employee_cost" : this.employeeCost,
            "tax_cnpj" : this.taxCNPJ,
            "site" : this.site,
            "packages" : this.packages,
            "gifts" : this.gifts,
            "freight_cost" : this.freightCost,
            "cac" : this.cac,
            "calc_profit" : this.calcProfit
        });
    }

    calculateFinanceCost(){
        return this.monthValueSell * this.financeCost;
    }
    
    calculateProductCost(){
        return this.monthValueSell / this.retailMarkup;
    }
    
    calculateCac(){
        return this.monthValueSell * this.cac;
    }

    calculateProfit(productCost, financeCost, cac){
        return ((((((((((this.monthValueSell - productCost) - financeCost) - this.operationalCost) - this.employeeCost)- this.taxCnpj)- this.site)- this.packages)- this.gifts)- this.freightCost)- cac);
    }


}

module.exports = BalanceEntity;