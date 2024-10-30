const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');

async function execute() {
    await ProductModel.sync();
    await ProductImageModel.sync({alter: true});
    await CategoryModel.sync();
    await ProductCategoryModel.sync({alter: true});
}

execute();
