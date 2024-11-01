const ProductModel = require('../../models/ProductModel')

module.exports = async (request, response) => {
    await ProductModel.destroy({
        where:{
            id: request.params.id
        }
    });
    response.status(200).end();
}