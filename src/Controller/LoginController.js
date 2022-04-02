const jwt = require('jsonwebtoken');
const User = require('./../models/UserModel');
const db = require('./../../database');

class LoginController {
    async login(req, res){
        try {
            const [results] = await db.query(
                `select * from users
                where email = "${req.body.email}" and password = "${req.body.password}"`
            );

            if(results[0]){
                //auth ok
                const email = results[0].email;
                const name = results[0].name;
                const isAdmin = results[0].is_admin;

                const token = jwt.sign({ email, name, isAdmin }, process.env.SECRET, {
                  expiresIn: 3600 // expires in 1 hr
                });
                return res.json({ auth: true, token: token });
            }

            return res.status(202).json({'message': 'Login do usuário'});
        } catch (error) {
            return res.status(500).json({'message': error.message});
        }
    }
    
    async logout(req, res) {
        try {
            
            return res.status(200).json({'message' : 'Logout do usuário'});
        } catch (error) {
            return res.status(500).json({'message' : error.message});
        }
    }



}


module.exports = new LoginController();