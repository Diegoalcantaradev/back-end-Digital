const ProductOptionsModel = require('../../models/ProductOptionsModel')

module.exports = async (request , response) => {
    let {body} = request
    let product_id = request.params.Productid
    let id = request.params.id
    body.values = body.values.join();
    try {
        await ProductOptionsModel.update(body,{
            where:{
                product_id:product_id,
                id:id
            }
        });
        response.status(201)
        return response.json({
            message: "opções do produto atualizados com sucesso!" 
        });
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao atualizar as opções do produto" 
        });
    }
}