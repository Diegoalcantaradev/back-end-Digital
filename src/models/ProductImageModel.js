const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductImageModel = connection.define("ProductImageMode", 
    /*definir colunas*/{
          // id o sequelize defini sozinho
          product_id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            // chave estrangeira
            references:{
                model: {
                    tableName: "product"
                },
                key: 'id'
            }
          },
          path:{
            type:DataTypes.STRING(255),
            allowNull: false
          }
    }, {
        tableName: 'product_image'
    });

    module.exports = ProductImageModel;
