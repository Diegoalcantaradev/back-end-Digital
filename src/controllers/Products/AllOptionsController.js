const ProductOptionsModel = require("../../models/ProductOptionsModel");
module.exports = async(request, response)=>{
    let Options;
    try{
        Options = await ProductOptionsModel.findAll({
            where:{
                product_id: request.params.id
            }
        })
        response.status(200);
        return response.json({
            message:"Lista de opções exibida com sucesso",
            Options});
    }catch(error){
        response.status(400)
        return response.json({
            message: "Erro ao exibir as opcoes" 
        });
    }
}