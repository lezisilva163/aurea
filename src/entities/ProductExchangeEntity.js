class ProductExchangeEntity {
    constructor(productExchangeModel){
        this.ProductExchangeModel = productExchangeModel;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setEmail(email){
        this.email = email;
    }

    getEmail(){
        return this.email;
    }

    setPhone(phone){
        this.phone = phone;
    }

    getPhone(){
        return this.phone;
    }

    setDate(date){
        this.date = date;
    }

    getDate(){
        return this.date;
    }

    setProductId(productId){
        this.productId = productId;
    }

    getProductId(){
        return this.productId;
    }

    setDescription(description){
        this.description = description;
    }

    getDescription(){
        return this.description;
    }

    setProductImage(productImage){
        this.productImage = productImage;
    }

    getProductImage(){
        return this.productImage;
    }

    async create(){
        return await this.ProductExchangeModel.create({
            "name" : this.name,
            "email" : this.name,
            "phone" : this.phone,
            "date" : this.date,
            "product_id" : this.productId,
            "description" : this.description,
            "product_image" : this.productImage
        });
    }
}

module.exports = ProductExchangeEntity;