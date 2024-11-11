const ProductOptionsModel = require('../../models/ProductOptionsModel');

module.exports = async(request,response)=>{

    let Options = []
    for(let options of request.body){
        Options.push({
            product_id: request.params.id,
            ...options,
            values: options.value.join()
        })
    }
    Options =  await ProductOptionsModel.bulkCreate(Options)
    response.status(201);
    return response.json(Options)
}