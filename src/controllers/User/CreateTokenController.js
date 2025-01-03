const UserModel = require('../../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = async (request, response) => {
    let {email, password} = request.body;
    
    if(!email || !password){
        response.status(400)
        return response.json({
            message: "Email ou senha incorreto"
        })
    }

    let user = await UserModel.findOne({
        where: {email}
    });

    let isValidUser = bcrypt.compareSync(password.toString(), user.password)

    if(!isValidUser){
        response.status(401);
        return response.json({
            message: "Usuario não autorizado"
        });
    }

    // email = btoa(user.email);
    // let secret = btoa(process.env.secret)
    let token = jwt.sign({id: user.id}, process.env.secret, {expiresIn: "24h"})
    return response.json({ token
        // token: btoa(`${email}:${user.password}:${secret}`)
    });
}