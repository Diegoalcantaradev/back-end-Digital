const ProductModel = require('../models/ProductModel')
const ProductImageModel = require('../models/ProductImageModel')
const ProductOptionsModel = require('../models/ProductOptionsModel')

ProductModel.hasMany(ProductImageModel,{
    foreignKey:'product_id',
    as:'images'
});
ProductModel.hasMany(ProductOptionsModel,{
    foreignKey:'product_id',
    as:'options'    
})