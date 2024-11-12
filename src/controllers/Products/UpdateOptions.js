const ProductOptionsModel = require('../../models/ProductOptionsModel')

module.exports = async (request , response) => {
    let {body} = request
    let product_id = request.params.Productid
    let id = request.params.id
    body.values = body.values.join();
    console.log(body.values)
    let a = await ProductOptionsModel.update(body,{
        where:{
            product_id:product_id,
            id:id
        }
    });
    return response.status(201).end();
}