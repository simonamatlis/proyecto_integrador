var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");




router.get('/register', userController.register);
router.post ('/registerStore', userController.registerInfo);

router.get('/login', userController.login);
router.post('/loginStore', userController.loginInfo);

router.get('/profile', userController.profile);

router.get('/edit', userController.profileEdit);
router.get('/editStore', userController.profileEditInfo)

module.exports = router;
