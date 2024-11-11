const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes')
const AllProductsController = require('../controllers/Products/AllProductsControler');
const CreateController = require("../controllers/Products/CreateController");
const UpdateController = require('../controllers/Products/UpdateController');
const ListImagesController = require('../controllers/Products/ListImagesController');
const DeleteController = require('../controllers/Products/DeleteController')
const GetBySlug = require('../controllers/Products/GetBySlug')
const CreateImagesController = require('../controllers/Products/CreateImagesController')
const UpdateImagesController = require('../controllers/Products/UpdateImagesController')
const CreateCategoryController = require('../controllers/Products/CreateCategoryController')
const AllCategoryController = require('../controllers/Products/AllCategoryController')
const AllOptionsController = require('../controllers/Products/AllOptionsController')
const CreateOptionsController = require('../controllers/Products/CreateOptionsController');
publicRoutes.get("/products",AllProductsController);
publicRoutes.get('/products/:slug',GetBySlug);
publicRoutes.get('/products/:id/images',ListImagesController);
publicRoutes.get('/products/:id/options',AllOptionsController);
publicRoutes.post('/products/:id/options', CreateOptionsController);
publicRoutes.get('/products/category',AllCategoryController);
publicRoutes.post('/products/category',CreateCategoryController);


privateRoutes.put('/products/:id/images/:imageId',UpdateImagesController);
privateRoutes.post('/products/:id/images',CreateImagesController);
privateRoutes.delete('/products/:id',DeleteController);
privateRoutes.post('/products',CreateController);
privateRoutes.put('/products/:id',UpdateController);


module.exports = [publicRoutes, privateRoutes];