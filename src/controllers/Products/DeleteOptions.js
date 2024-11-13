const ProductOptionsModel = require('../../models/ProductOptionsModel')

module.exports = async (request, response) => {
    let product_id = request.params.Productid
    let id = request.params.id
    try {
        let Options = await ProductOptionsModel.destroy({
            where:{
                product_id:product_id,
                id:id
            }
        });
        response.status(200)
        return response.json({
            message: "Opções deletada com sucesso"
        })
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao deleta as opções do produto" 
        });
    }
   
}