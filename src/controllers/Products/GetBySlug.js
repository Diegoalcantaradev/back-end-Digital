const productModel = require("../../models/ProductModel")
const ProductImageModel = require('../../models/ProductImageModel')
const ProductOptionsModel = require('../../models/ProductOptionsModel')

module.exports = async (request, response) => {
    
    let products;
    try {
        products = await productModel.findAll({
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
        response.status(200);

        console.log(products)
        return response.json(products);
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao pesquisar produto via Slug" 
        });
    }
}