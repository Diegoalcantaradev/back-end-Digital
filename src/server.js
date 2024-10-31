const dotenv = require('dotenv')
dotenv.config();
const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/user-routes')
const productsRoutes = require('./routes/product-routes')
app.use('/public', express.static('public'))

app.use(userRoutes)
app.use(productsRoutes)

app.listen(3000,()=>{
    console.log("Servidor web inicializado em http://localhost:3000");
});