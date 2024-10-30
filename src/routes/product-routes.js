const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsControler');
const CreateController = require("../controllers/Products/CreateController");

router.get("/Products",AllProductsController);
router.post('/products',CreateController);

module.exports = router;