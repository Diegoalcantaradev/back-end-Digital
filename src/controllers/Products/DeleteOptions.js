const ProductOptionsModel = require('../../models/ProductOptionsModel')

module.exports = async (request, response) => {
    let product_id = request.params.Productid
    let id = request.params.id
    let Options = await ProductOptionsModel.destroy({
        where:{
            product_id:product_id,
            id:id
        },
        
    });
    return response.status(201).end();
}