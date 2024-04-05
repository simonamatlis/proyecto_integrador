var express = require('express');
var router = express.Router();

const usersController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/users", userController.users)

//users/register:

router.get('/register', userController.register);

router.get('/login', userController.login);

module.exports = router;
