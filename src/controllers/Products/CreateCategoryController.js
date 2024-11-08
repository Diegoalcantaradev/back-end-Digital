const CategoryModel = require('../../models/CategoryModel')

module.exports = async (request, response) => {
    let category = await CategoryModel.create(request.body)
    response.status(201);
    return response.json(category);
}