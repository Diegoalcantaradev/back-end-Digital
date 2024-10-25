
const UserAccessModel = require("./criando-model")

async function execute(){
    // SELECT * FROM StorageEvent.user_acess 
//     let all = await UserAccessModel.findAll();
//     console.log(all)

    // SELECT id, email FROM store.user_acess
    // let resultado = await UserAccessModel.findAll({
    //     attributes: ['id', 'email']
    // });
    // console.log(resultado);


    // SELECT * FROM store.user_acess where id = 2
    // let resultado = await UserAccessModel.findAll({
    //     attributes: ['email', "createAt"], //email, createdAt no lugar do *
    //     where:{
    //         id: 2
    //     }
    // });
    // console.log(resultado)


    // SELECT id, email FROM store.user_acess WHERE email = diego@mail.com 
    // let resultado = await UserAccessModel.findOne({
    //     where:{
    //         email: "diego@mail.com"
    //     }
    // });

    // console.log(resultado)


    // SELECT id, email FROM store.user_acess WHERE id = 3
    let resultado = await UserAccessModel.findByPk(2,{
        attributes: ['id', 'email']
    }
    )
    
    console.log(resultado)
}

execute();