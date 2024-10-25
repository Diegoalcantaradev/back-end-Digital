const connection = require("../src/database/connection")
const { DataTypes } = require("sequelize");


const UserAccessModel = connection.define("UserAccessModel", {
    email: {
        type:DataTypes.STRING(45),
         allowNull: false
    },
    password: {
        type:DataTypes.STRING(45),
        allowNull:false
    }
}, {
    tableName: "user_acess",
});

UserAccessModel.sync({alter: true});
// force: força apagando a tabela
// alter: altera o tabela

module.exports = UserAccessModel;