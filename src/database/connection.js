const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "1234",
    database: "store"
})

module.exports = connection;