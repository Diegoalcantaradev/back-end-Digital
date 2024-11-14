const CategoryModel = require('../../models/CategoryModel')
module.exports = async(request, response) => {
    let category;
    
    try {
        category = await CategoryModel.destroy({
            where:{
            id: request.params.id
            }
        });
        if (category === 0) {
            response.status(401)
            throw new Error("categoria não existe")
        }else{
            response.status(200)
            return response.json({
                message: `categoria deletada com sucesso`
            });
        }
    }catch(error) {
        response.status(400)
        return response.json({
            message: "Erro ao deletar categoria" 
        });
    }
}