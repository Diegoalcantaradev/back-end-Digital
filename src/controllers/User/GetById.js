const UserModel = require('../../models/UserModel')

module.exports = async(request, response) => {
    let User = await UserModel.findByPk(request.params.id)
    return response.json(User);
}