const CategoryModel = require('../../models/CategoryModel')
module.exports = async(request, response) => {
    let {body} = request
    try {
        await CategoryModel.update(body,{
            where:{
                id:request.params.id
            }
        });
        response.status(200)
        return response.json({
            message: "Categoria atualizada com sucesso!"
        })
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao atualizar categoria" 
        });
    }
}