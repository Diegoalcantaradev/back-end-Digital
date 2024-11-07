const connection = require('../database/connection');
const {DataTypes} = require('sequelize');
const { getPublicUrl } = require('../ultils/url-builder')

const ProductImageModel = connection.define("ProductImageModel", 
    /*definir colunas*/{
          // id o sequelize defini sozinho
          product_id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            onDelete: "CASCADE",
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
          },
          url: {
            type: DataTypes.VIRTUAL,
            get(){
              return getPublicUrl(this.getDataValue("path"));
            }
          }
    }, {
        tableName: 'product_image'
    });

    module.exports = ProductImageModel;
