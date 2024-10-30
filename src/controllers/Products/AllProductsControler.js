const productModel = require("../../models/ProductModel")

module.exports = async (request, response) => {
    let products = await productModel.findAll();
    return response.json(products);
}