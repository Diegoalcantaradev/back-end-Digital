const express = require('express');

let router = express.Router();

const AllProductsController = require('../controllers/Products/AllProductsControler');

router.get("/Products",AllProductsController);


module.exports = router;