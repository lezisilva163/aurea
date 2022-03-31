const jwt = require('jsonwebtoken');

class LoginController {
    async login(req, res){
        try {
            if(req.body.user === 'leo' && req.body.password === '123'){
                //auth ok
                const id = 1; //esse id viria do banco de dados
                const token = jwt.sign({ id }, process.env.SECRET, {
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