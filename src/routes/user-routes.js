const express = require('express');

let router = express.Router();
const publicRoutes = require('./public-routes')
const privateRoutes = require('./private-routes')

const AllUserController = require('../controllers/User/AllUserController');
/**
 CRIAR UM MIDDLEWARE PARA ENCRIPTAR A SENHA QUANDO
 CADASTRAR UM NOVO USUARIO
 
 USAR A FUNÇÃO btoa() DO JS PARA ENCRIPTAR A SENHA
 OBS: O middleware não deve salvar o usuario, o middleware deve
 manipular as informações do request.body para chegar já encriptado
 la no controller
 */
const encriptPassword = require('../midleware/encript-password');
const CreateController = require('../controllers/User/CreateController');
const CreateTokenController = require('../controllers/User/CreateTokenController');
const GetById = require('../controllers/User/GetById');
const UpdateUsers = require('../controllers/User/UpdateUsers');
const DeleteUser = require('../controllers/User/DeleteUser')

publicRoutes.post("/users",encriptPassword, CreateController);
publicRoutes.get("/users",AllUserController);
publicRoutes.post("/users/token", CreateTokenController);
publicRoutes.get('/users/:id',GetById);
publicRoutes.put('/users/:id',UpdateUsers);
publicRoutes.delete('/users/:id',DeleteUser);

module.exports = router;