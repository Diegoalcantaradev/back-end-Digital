const ProductModel = require("../../models/ProductModel");
const ProductImageModel = require("../../models/ProductImageModel");
const {deleteMany} = require('../../services/product-images');

module.exports = async (request, response) => {
    let images;
    let count;
    try {
        images = await ProductImageModel.findAll({
            attributes: ['path'],
            where: {
                product_id: request.params.id
            }
        });
        count = await ProductModel.destroy({
            where: {
                id: request.params.id
            }
        });
    
        if(count > 0) {
            deleteMany(images.map(image => image.path))
        }
        response.status(204)
        return response.json({
            message: "Produto deletado com sucesso"
        })
    } catch (error) {
        response.status(400);
        return response.json({
            message: "Erro ao deletar produto" 
        });
    }
}