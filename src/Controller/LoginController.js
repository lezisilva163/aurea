class LoginController {
    login(req, res){
        try {
            return res.status(202).json({'message': 'Login do usuário'})
        } catch (error) {
            return res.status(500).json({'message': error.message})
        }
    }

}


module.exports = new LoginController();