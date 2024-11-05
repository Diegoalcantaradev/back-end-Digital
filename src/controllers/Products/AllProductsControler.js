const productModel = require("../../models/ProductModel")
const ProductImageModel = require('../../models/ProductImageModel')

productModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
})

module.exports = async (request, response) => {
       //  return response.end(request.teste);
    let products = await productModel.findAll({
        include:{
            attributes: ['id','url','path'],
            model: ProductImageModel,
            as: 'images'
        }
    });
    return response.json(products);
}