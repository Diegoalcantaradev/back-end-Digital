const express = require('express');

let router = express.Router();

const AllUserController = require('../controllers/User/AllUserController');
const CreateController = require('../controllers/User/CreateController')

router.get("/users",AllUserController);
router.post("/users",CreateController)

module.exports = router;