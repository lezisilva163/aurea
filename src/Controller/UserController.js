const Sequelize = require('sequelize');
const db = require('../../database');
const UserEntity = require('../entities/UserEntity');
const UserModel = require('./../models/UserModel');

class UserController {
    async create(req, res){
        try {
            // const data = req.body;
            const user = new UserEntity(UserModel);

            user.setIsAdmin(req.body.is_admin);
            user.setName(req.body.name);
            user.setEmail(req.body.email);
            user.setPassword(req.body.password);
            await user.create();

            return res.status(201).json({ 'data' : user });
        } catch (error) {
            return res.status(500).json({'message' : error.message});
        }
    }
};

module.exports = new UserController();