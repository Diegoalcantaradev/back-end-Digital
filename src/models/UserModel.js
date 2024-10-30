const connection = require("../database/connection");
const {DataTypes} = require('sequelize');

const UserModel = connection.define("UserModel",
    {
        firstName:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        surName:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type: DataTypes.STRING(255),
            allowNull:false
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull:false
        }
    },
    {
        tableName: "user"
    });

    module.exports = UserModel;

