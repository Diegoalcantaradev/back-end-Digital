const UserModel = require('../../models/UserModel')

module.exports = async (request, response) => {
    let {email, password} = request.body;
    
    if(!email || !password){
        response.status(400)
        return response.json({
            message: "Email ou senha incorreto"
        })
    }

    let user = await UserModel.findOne({
        where: {email, password}
    });

    if(!user?.id){
        response.status(401);
        return response.json({
            message: "Usuario não autorizado"
        });
    }

    email = btoa(user.email);
    let secret = btoa(process.env.secret)

    return response.json({
        token: btoa(`${email}:${user.password}:${secret}`)
    });
}