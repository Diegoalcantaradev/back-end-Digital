const fs = require('fs');
const path = require("path");
const ProductModel = require("../../models/ProductModel");
const {saveByUrl} = require('../../services/product-images');
const ProductImageModel = require('../../models/ProductImageModel')

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price,
        enabled,
        price_with_discount,
        stock,
        description
    } = request.body;
    let product;

    try{
        product = await ProductModel.create({
            name,slug,price,enabled,price_with_discount,stock,description
        });
        
    }catch(error){
        response.status(400)
        return response.json({
            message: "Erro ao criar produto" 
        });
    }
    
    let images = []
    try {
    for (let url of request.body.images){
        let {relativePath} = await saveByUrl({url,slug})
        images.push({
            product_id: product.id,
            path: relativePath
        })
    }
    await ProductImageModel.bulkCreate(images)
    response.status(201);
    return response.json({
        message:"produto criado com sucesso!",
        product});
}catch(error){
    console.log(error.message);
     response.status(400)
        return response.json({
            message: "Erro ao salvar imagens do produto: " + product.id
        })
}
}
