const UserModel = require("../models/UserModel");
const jwt = require('jsonwebtoken')
module.exports = async (request, response, next) => {
    let token = request.headers.authorization?.replace('Bearer ', '');
try{
    if(!token){
        throw new Error("Token não enviado na requisição");
    }
    let decoded = jwt.verify(token, process.env.SECRET)
    let user = await UserModel.findByPk(decoded.id)
    if(!user?.id){
        throw new Error("Usuario não encontrado");
    }
}catch(error){
    return response.json({
        message: "Você não tem autorização para acessar este recurso"
    });
}
next()
}
    // antigo metodo para auth
    // token = atob(token)
    
    // let[email,password, secret] = token.split(':');
    // email = atob(email)
    // secret = atob(secret)

    // let user = await UserModel.findOne({
    //     where: {
    //         email, password 
    //     }
    // });

    // if(!user || process.env.SECRET !== secret){
    //      return response.json({
    //     message: "Você deve está autenticado para acessar este recurso!" 
    // });
    // }
