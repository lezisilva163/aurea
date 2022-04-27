class ProductEntity {
    constructor(productModel){
        this.productModel = productModel;
    }

    setType(type){
        this.type = type;
    }

    getType(){
        return this.type;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setSize(size){
        this.size = size;
    }

    getSize(){
        return this.size;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }

    getQuantity(){
        return this.quantity;
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    setValue(value){
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setProvider(provider){
        this.provider = provider;
    }

    getProvider(){
        return this.provider;
    }

    async create(){
        return await this.productModel.create({
            'type' : this.type,
            'name' : this.name,
            'size' : this.size,
            'quantity' : this.quantity,
            'color' : this.color,
            'value' : this.value,
            'provider' : this.provider
        });
    }

    async list(){
        return await this.productModel.findAll();
    }

    async find(id){
        return await this.productModel.findByPk(id);
    }

    async delete(id){
        const product = await this.productModel.findByPk(id);
        return await product.destroy();
    }

}


module.exports = ProductEntity;