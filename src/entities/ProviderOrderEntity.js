class ProviderOrderEntity {
    constructor(providerOrderModel){
        this.providerOrderModel = providerOrderModel;
    }

    setProductId(productId){
        this.productId = productId;
    }

    getProductId(){
        return this.productId;
    }

    setProviderId(providerId){
        this.providerId = providerId;
    }

    getProviderId(){
        return this.providerId;
    }

    setTotalValue(totalValue){
        this.totalValue = totalValue;
    }

    getProviderId(){
        return this.totalValue;
    }

    setTotalPaid(totalPaid){
        this.totalPaid = totalPaid;
    }

    getTotalPaid(){
        return this.totalPaid;
    }

    setUserName(userName){
        this.userName = userName;
    }

    getUserName(){
        return this.userName;
    }

    setFirstPayment(firstPayment){
        this.firstPayment = firstPayment;
    }

    getFirstPayment(){
        return this.firstPayment;
    }

    setFirstPaymentDate(firstPaymentDate){
        this.firstPaymentDate = firstPaymentDate;
    }

    getFirstPaymentDate(){
        return this.firstPaymentDate;
    }

    setSecondPayment(secondPayment){
        this.secondPayment = secondPayment;
    }

    getSecondPayment(){
        return this.firstsecondPaymentPayment;
    }

    setSecondPaymentDate(secondPaymentDate){
        this.secondPaymentDate = secondPaymentDate;
    }

    getSecondPaymentDate(){
        return this.secondPaymentDate;
    }

    setDatasheet(datasheet){
        this.datasheet = datasheet;
    }

    getDatasheet(){
        return this.datasheet;
    }

    setReferenceProduct(referenceProduct){
        this.referenceProduct = referenceProduct;
    }

    getReferenceProduct(){
        return this.referenceProduct;
    }

    setReceivedOrder(receivedOrder){
        this.receivedOrder = receivedOrder;
    }

    getReceivedOrder(){
        return this.receivedOrder;
    }

    setDeadline(deadline){
        this.deadline = deadline;
    }

    getDeadline(){
        return this.deadline;
    }

    async create(){
        return await this.providerOrderModel.create({
            
        });
    }

}

module.exports = ProviderOrderEntity;