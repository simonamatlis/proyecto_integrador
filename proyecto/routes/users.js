var express = require('express');
var router = express.Router();
let {body} =require('express-validator');
let db = require('../database/models')
const bcrypt= require('bcryptjs')

const userController = require("../controllers/userController");

//validaciones del login
let userValidations = [
    body('email')
        .notEmpty().withMessage('Por favor complete el campo con su correo.')
        .isEmail().withMessage('Por favor ingrese un mail válido')
        // valida que el mail esté en la base de datos:
        .custom( function(value) {
          return  db.User.findOne({
                where: {email: req.body.email}
            })
            .then(function(user){
                if (!user){
                    throw new Error('El email no se encuentra registrado')

                }
            })
            
        }),


    // encuentre el mail y vea si existe el usuario o no. Si existe el usuario, que vea si la contraseña es correcta o no. 
            
    body ('contrasenia')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        .custom (function(value){
            return db.User.findOne({
                Where: {email: value }
            })
            .then(function(user){
                if (!user){
                    throw new Error('El usuario es inexistente')

                }else{
                        // para que verifique que la pass sea la correcta:
                        let check= bcrypt.compareSync(contrasenia, contra)
                        if (!check){
                            throw new Error('Contraseña incorrecta')
                        }
                    
                }
            })
        })
]

// validaciones del register
let registerValidations = [
    body('mail')
        .notEmpty().withMessage('Por favor complete el campo con su correo.')
        .isEmail().withMessage('Por favor ingrese un mail válido'),


    body ('user').notEmpty().withMessage('Por favor complete el campo con su nombre.'),
    
    body('contrasenia')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        .isLength({min: 4}).withMessage( 'Su contraseña debe tener mínimo 4 caracteres.')
    
]

let userEditValidation =[
    body('email')
    .notEmpty().withMessage('Por favor complete el campo con su correo.')
    .isEmail().withMessage('Por favor ingrese un mail válido')
    .custom( function(value) {
      return  db.User.findOne({
            where: {email: req.body.email}
        })
        .then(function(user){
            if (!user){
                return true;

            }else{
                throw new Error('El email ya se encuentra registrado')
            }
        })
        
    }),

    body ('user').notEmpty().withMessage('Por favor complete el campo con su nombre.'),
    
    body('contrasenia')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        .isLength({min: 4}).withMessage( 'Su contraseña debe tener mínimo 4 caracteres.')
    
]


//hacer una ruta logOut
router.get('/register', userController.register);
router.post ('/registerStore', registerValidations,  userController.registerInfo);

router.get('/login', userController.login);
router.post('/loginStore', userValidations, userController.loginInfo); 


router.get('/profile/:id', userController.profile);

router.get('/edit', userController.profileEdit);
router.post('/editStore',userEditValidation, userController.profileEditInfo)


module.exports = router;
