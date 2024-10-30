const UserModel = require("../../models/UserModel")

module.exports = async (request, response) => {
    let user = await UserModel.findAll();
    return response.json(user);
}