const UserModel = require("../models/UserModel");

module.exports = async (request, response, next) => {
    let email = request.headers.email
    let password = request.headers.password

    let user = await UserModel.findOne({
        where: {
            email, password: btoa(password)
        }
    });
    if(!email || !password){
        return response.json({
            message: "Você deve está autenticado para acessar este recurso" 
    });
}
    if(!user){
         return response.json({
        message: "Você deve está autenticado para acessar este recurso" 
    });
    }
    next()
}
