const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const ProductOptions = connection.define("ProductOptions",
    {   
        product_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:{
                    tableName:"product"
                },
                key:'id'
            }
        },
        title:{
            type: DataTypes.STRING(20),
            allowNull:false,
        },
        shape: {
            type: DataTypes.ENUM('value', 'square','circle'),
            defaultValue: 'square',
            allowNull:false
        },
        radius: {
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM(['value', 'text', 'color']),
            allowNull:false,
            defaultValue: 'text'
        },
        values:{
            type: DataTypes.STRING(255),
            allowNull:false
        }
    },
    {
        tableName: 'product_options'
    }
)
module.exports = ProductOptions;