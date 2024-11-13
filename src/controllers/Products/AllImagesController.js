const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
    let images;
    try{
        images = await ProductImageModel.findAll({
            attributes: ['url','id','path'],
            where: {
                product_id: request.params.id
            }
        });
        response.status(200)
        return response.json({
            message:"Lista de imagens exibida com sucesso",
            images});
    }catch(error){
        response.status(400)
        return response.json({
            message: "Erro ao exibir imagens" 
        });
    }   
}