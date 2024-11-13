const ProductOptionsModel = require('../../models/ProductOptionsModel');

module.exports = async(request,response)=>{

    try {
        let Options = []
    for(let options of request.body){
        Options.push({
            product_id: request.params.id,
            ...options,
            values: options.value.join()
        })
    }
    Options = await ProductOptionsModel.bulkCreate(Options)
    response.status(201);
    return response.json({
        message:"Opções do produto criada com sucesso",
        Options})  
    } catch (error) {
    response.status(400)
    return response.json({
        message: "Erro ao criar as opções do produto" 
    });
    }

}