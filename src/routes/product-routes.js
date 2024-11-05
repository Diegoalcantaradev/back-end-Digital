const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes')
const AllProductsController = require('../controllers/Products/AllProductsControler');
const CreateController = require("../controllers/Products/CreateController");
const UpdateController = require('../controllers/Products/UpdateController');
const DeleteController = require('../controllers/Products/DeleteController')
const GetBySlug = require('../controllers/Products/GetBySlug')


publicRoutes.get("/products",AllProductsController);
publicRoutes.get('/products/:slug',GetBySlug);

privateRoutes.delete('/products/:id',DeleteController);
privateRoutes.post('/products',CreateController);
privateRoutes.put('/products/:id',UpdateController);


module.exports = [publicRoutes, privateRoutes];