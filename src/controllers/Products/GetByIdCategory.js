const CategoryModel = require('../../models/CategoryModel')
module.exports = async (request, response) => {
    let categoryId;
    try {
        categoryId = await CategoryModel.findAll({
            where:{
                id: request.params.id
            }
        });
        return response.json(categoryId)
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao exibir categoria" 
        });
    }
}