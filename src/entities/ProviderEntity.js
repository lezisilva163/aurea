class ProviderEntity {
    constructor(providerModel) {
        this.providerModel = providerModel;
    }

    setCompany(company){
        this.company = company;
    }

    getCompany(){
        return this.company;
    }

    setAddress(address){
        this.address = address;
    }

    getAddress(){
        return this.address;
    }

    setWhatsapp(whatsapp){
        this.whatsapp = whatsapp;
    }

    getWhatsapp(){
        return this.whatsapp;
    }

    setAttendant(attendant){
        this.attendant = attendant;
    }

    getAttendant(){
        return this.attendant;
    }

    async create(){
        return await this.providerModel.create({
            "company" : this.company,
            "address" : this.address,
            "whatsapp" : this.whatsapp,
            "attendant" : this.attendant,
            "cnpj" : this.cnpj
        });
    }

}

module.exports = ProviderEntity;