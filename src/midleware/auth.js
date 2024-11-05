const UserModel = require("../models/UserModel");

module.exports = async (request, response, next) => {
    let token = request.headers.token;

    if(!token){
        return response.json({
            message: "Você deve está autenticado para acessar este recurso" 
    });
}

    token = atob(token)
    
    let[email,password, secret] = token.split(':');
    email = atob(email)
    secret = atob(secret)

    let user = await UserModel.findOne({
        where: {
            email, password 
        }
    });

    if(!user || process.env.SECRET !== secret){
         return response.json({
        message: "Você deve está autenticado para acessar este recurso!" 
    });
    }
    next()
}
