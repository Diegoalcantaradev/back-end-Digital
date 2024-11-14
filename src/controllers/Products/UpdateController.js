const ProductModel = require('../../models/ProductModel')

module.exports = async (request, response) => {
    let {body} = request;
    try {
        await ProductModel.update(body,{
            where:{
                id: request.params.id
            }
        });
        response.status(204) 
        return response.json({
            message: "Produto atualizado com sucesso!"
        });
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao atualizar produto" 
        });
    }
    
}