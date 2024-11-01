const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsControler');
const CreateController = require("../controllers/Products/CreateController");
const UpdateController = require('../controllers/Products/UpdateController');
const DeleteController = require('../controllers/Products/DeleteController')

router.delete('/products/:id',DeleteController);
router.get("/Products",AllProductsController);
router.post('/products',CreateController);
router.put('/products/:id',UpdateController);

module.exports = router;