const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
const userRoutes = require('./routes/user-routes')
const productsRoutes = require('./routes/product-routes')

app.use(userRoutes)
app.use(productsRoutes)

app.listen(3000,()=>{
    console.log("Servidor web inicializado em http://localhost:3000");
});