const productModel = require("../../models/ProductModel")
const ProductImageModel = require('../../models/ProductImageModel')
const ProductOptionsModel = require('../../models/ProductOptionsModel')

module.exports = async (request, response) => {
    let products = await productModel.findAll({
        where:{
            slug: request.params.slug
        },
        include:[{
            attributes: ['id','url','path'],
            model: ProductImageModel, 
            as: 'images'
        },
        {
            attributes: ['id','title','shape','radius','type','values'],
            model: ProductOptionsModel,
            as: 'options'
        }]
    });
    return response.json(products);
}