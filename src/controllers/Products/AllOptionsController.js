const ProductModel = require("../../models/ProductModel");
const ProductOptionsModel = require("../../models/ProductOptionsModel");
module.exports = async(request, response)=>{
    let Options = await ProductOptionsModel.findAll({
        where:{
            product_id: request.params.id
        }
    })
    response.status(201);
    return response.json(Options);
}