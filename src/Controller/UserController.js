const Sequelize = require('sequelize');
const db = require('../../database');
const User = require('./../models/UserModel');

class UserController {
    async create(req, res){
        try {
            const data = req.body;
            // const isAdmin = req.body.is_admin;
            // const name = req.body.name;
            // const email = req.body.email;
            // const password = req.body.password;

            const user = await User.create(data
                //{
                //"is_admin" : isAdmin,
                //"name" : name,
                //"email" : email,
                //"password" : password
            //}
            );

            return res.status(201).json({'data' : user});
        } catch (error) {
            return res.status(500).json({'message' : error.message});
        }
    }
};

module.exports = new UserController();