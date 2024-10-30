const UserModel = require('../../models/UserModel')

module.exports = async (request, response) => {
    let {body} = request;
    let user = await UserModel.create(body);
    response.status(201);
    return response.json(user);
}