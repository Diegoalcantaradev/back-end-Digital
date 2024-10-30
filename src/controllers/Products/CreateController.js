const ProductModel = require("../../models/ProductModel");


module.exports = async (request, response) => {
    let {body} = request;
    let product = await ProductModel.create(body);
    response.status(201);
    return response.json(product);
}