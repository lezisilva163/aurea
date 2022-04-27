class UserEntity{
    constructor(userModel){
        this.userModel = userModel;
    }

    setIsAdmin(isAdmin){
        this.is_admin = isAdmin;
    }

    getIsAdmin(){
        return this.is_admin;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setEmail(email){
        this.email = email;
    }

    getEmail(){
        return this.email;
    }

    setPassword(password){
        this.password = password;
    }
    
    async create(){
        return await this.userModel.create({
            'is_admin' : this.is_admin,
            'name' : this.name,
            'email' : this.email,
            'password' : this.password
        });
    }

}

module.exports = UserEntity;