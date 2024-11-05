const UserModel = require('../../models/UserModel')

module.exports = async (request, response) => {
    let user = await UserModel.create(request.body);
    response.status(201);
    return response.json(user);
}