const ProductOptionsModel = require("../../models/ProductOptionsModel");
const ProductModel = require("../../models/ProductModel")
module.exports = async(request, response)=>{
    let Options = await ProductOptionsModel.findAll({
        where:{
            enabled:true
        },
        include:{
            attributes:['id','name'],
            model: ProductModel,
            as:'Products'
        }
    })
    return response.json(Options);
}