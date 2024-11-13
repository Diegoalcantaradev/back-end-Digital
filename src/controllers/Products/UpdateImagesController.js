const ProductImageModel = require('../../models/ProductImageModel');
const ProductModel = require('../../models/ProductModel')
const { saveByUrl } = require('../../services/product-images');

module.exports = async (request, response)=>{
    let {id, imageId} = request.params;
    let product
    try {
        product = await ProductModel.findOne({
            where:{id}
        });
    
        let image = await saveByUrl({url:request.body.url, slug: product.slug});
    
        await ProductImageModel.update({
            path: image.relativePath
        }, {
            where:{
                product_id: id,
                id: imageId
            }
        });
        response.status(204)
        return response.json({
            message: "Imagem atualizada com sucesso" 
        });
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao atualizar a imagem do produto" 
        });
    }
    
}