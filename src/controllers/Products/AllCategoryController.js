const CategoryModel = require("../../models/CategoryModel");
module.exports = async(request, response)=>{
    let category;
    try {
        category = await CategoryModel.findAll()
        return response.json(category);
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao exibir as categorias"
        })
    }
    
}