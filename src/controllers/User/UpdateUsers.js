const UserModel = require('../../models/UserModel')

module.exports = async (request, response) => {
    let {body} = request;

    await UserModel.update(body,{
        where:{
            id: request.params.id
        }
    });

    response.status(204).end();
}