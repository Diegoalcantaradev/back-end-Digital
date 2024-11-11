const CategoryModel = require("../../models/CategoryModel");
const ProductCategoryModel = require("../../models/ProductCategoryModel");
module.exports = async(request, response)=>{
    let category = await CategoryModel.findAll({
        where:{
            enabled:true
        },
        include:{
            attributes: ['id','name'],
            model: ProductCategoryModel,
            as:'CategoryProduct '
        }
    })
    return response.json(category)
}