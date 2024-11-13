const ProductImageModel = require("../../models/ProductImageModel")

module.exports = async (request, response) => {
    try {
        let image = await ProductImageModel.destroy({
            where:{
                product_id:request.params.productId,
                id:request.params.id
            }
        })
        response.status(200);
        return response.json({
            message:`Imagem ${request.params.id} deletada com sucesso`
        })
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao deletar imagem" 
        });
    }

}