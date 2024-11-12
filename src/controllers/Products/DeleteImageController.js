const ProductImageModel = require("../../models/ProductImageModel")

module.exports = async (request, response) => {
    console.log(request.params)
    let image = await ProductImageModel.destroy({
        where:{
            product_id:request.params.productId,
            id:request.params.id
        }
    })
    return response.status(204);
}