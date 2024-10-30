const express = require('express');

let router = express.Router();

const AllUserController = require('../controllers/User/AllUserController');


router.get("/users",AllUserController);


module.exports = router;