const productModel = require("../../models/ProductModel")
const ProductImageModel = require('../../models/ProductImageModel')
const ProductOptionsModel = require('../../models/ProductOptionsModel')
module.exports = async (request, response) => {
       //  return response.end(request.teste);
    let products;
    try{
    products = await productModel.findAll({
        where:{
            enabled:true
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
    return response.json({
        message:"Lista de produtos exibida com sucesso",
        products});
    }catch(error){
        response.status(400);
        return response.json({
            message: "Erro ao exibir produtos"   
        })
    }
}