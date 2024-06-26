var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
let db = require('../database/models')
const bcrypt = require('bcryptjs')

const userController = require("../controllers/userController");

//validaciones del login
let userValidations = [
    
    body('email')
        .notEmpty().withMessage('Por favor complete el campo con su correo.')
        .isEmail().withMessage('Por favor ingrese un mail válido')
        .custom(function(value) {
           console.log("test 01");
          return  db.Usuario.findOne({
                where: {email: value}
            })
            .then(function(user){
                if (!user){
                    throw new Error('El email no se encuentra registrado')
                } else {
                }
            })
           
        }),

            
    body ('contra')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        .custom (function(value, {req}){
            console.log("test 1");
            return db.Usuario.findOne({
                where: {email: req.body.email }
            })
            .then(function(user){
                if (user != undefined){
                    // para que verifique que la pass sea la correcta:
                    let check= bcrypt.compareSync(req.body.contra, user.contra)
                    // console.log('====ok===='+check)
                    if (!check){
                        throw new Error('Contraseña incorrecta'+" enviando= "+req.body.contra + " esperando = "+user.contra)
                    }
                    

                }else{    
                    throw new Error('El usuario es inexistente')
                }
            })
        })
];

// validaciones del register
let registerValidations = [
    body('email')
        .notEmpty().withMessage('Por favor complete el campo con su correo.')
        .isEmail().withMessage('Por favor ingrese un mail válido'),


    body ('usuario').notEmpty().withMessage('Por favor complete el campo con su nombre.'),
    
    body('contra')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        .isLength({min: 4}).withMessage( 'Su contraseña debe tener mínimo 4 caracteres.')
    
];

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
    
    body('contra')
        .notEmpty().withMessage('Por favor complete el campo con una contraseña')
        .isLength({min: 4}).withMessage( 'Su contraseña debe tener mínimo 4 caracteres.')
    
];


//hacer una ruta logOut
router.get('/register', userController.register);
router.post ('/registerStore', registerValidations,  userController.registerInfo);

router.get('/login', userController.login);
router.post('/loginStore', userValidations, userController.loginInfo); 


router.get('/profile/id/:id', userController.profile);

router.get('/edit', userController.profileEdit);
router.post('/editStore',userEditValidation, userController.profileEditInfo)

router.post('/logOut', userController.logOut)


module.exports = router;
