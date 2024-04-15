var express = require('express');
var router = express.Router();

const usersController = require("../controllers/userController");


router.get("/users", usersController.users)

//users/register:

router.get('/register', usersController.register);

router.get('/login', usersController.login);

module.exports = router;
