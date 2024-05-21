var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");




router.get('/register', userController.register);
router.post ('/register', userController.registerInfo);

router.get('/login', userController.login);
router.post('/login', userController.loginInfo);

router.get('/profile', userController.profile);

router.get('/edit', userController.profileEdit);
router.get('/edit', userController.profileEditInfo)

module.exports = router;
