const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');

async function execute(){
    await ProductModel.sync();
    await ProductImageModel.sync();
}

execute();

