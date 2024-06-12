var express = require('express');
var router = express.Router();
let {body} =require('express-validator');

const userController = require("../controllers/userController");

let userValidations = [
    body('email')
        .notEmpty().withMessage('Por favor complete el campo con su correo.')
        .isEmail().withMessage('Por favor ingrese un mail válido'),
    body ('contrasenia')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        
]

router.get('/register', userController.register);
router.post ('/registerStore', userController.registerInfo);

router.get('/login', userController.login);
router.post('/loginStore', userValidations, userController.loginInfo); 


router.get('/profile', userController.profile);

router.get('/edit', userController.profileEdit);
router.get('/editStore', userController.profileEditInfo)

module.exports = router;
