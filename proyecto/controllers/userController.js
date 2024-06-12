const db =require('../database/models');
const bcrypt= require('bcryptjs')

let {validationUser} = require('express-validator')
//falta la parte de conectar la base de datos + vista indicada.
// EL ALIAS DEL MODELO ES 'Usuario'

const userController = {
    register : function(req,res){
        if (req.session.usuarioLogueado){
            return res.redirect('/users/login')} //si ya está registrado, andá a login. 
        else{
            return res.render('register', {title: 'Registrate', usuario: data.usuario});
    }}, // revisar tema de session y cookies para corregirlo. 


    registerInfo : function (req, res) {
        db.Usuario.create({
            email: req.body.email,
            id_user: req.body.user,
            contra: bcrypt.hashSync(req.body.contrasenia,10), // passw encriptada + sincronizada c/el formulario
            fecha: req.body.fecha,
            dni: req.body.documento,
            profilePic: req.body.fotoPerfil
        })
        .then(function (result) { 
            return res.redirect ('/')     
        }).catch (error => console.log(error))
        
    },


    login : function (req,res){
            if (req.session.usuarioLogueado){
                return res.redirect('/')}
            else{
                return res.render('login', {title: 'login', usuario: data.usuario});
    }},


    loginInfo: function (req,res, next){
     // TRAIGO DEL FORM LA DATA Y LO GUARDO EN SESSION
        let nombreUsuario = req.body.email; // traigo del formulario el mail y lo guardo.Puse nombreUsuario, podría haber usado otro nombre.
        req.session.Usuario = nombreUsuario; // ahí lo guardé en sesión. Le puse 'Usuario', pero podría haber usado otro nombre.
        let pass = req.body.contrasenia;
        req.session.pass = pass; 
        let recordarme = req.body.recordarme;
        req.session.guardar = recordarme; 
     
        
        // los errores que traigo de la validación, parte almacenada en ruta
        let errors = validationUser(req);

        if (errors.isEmpty ()){
            db.Usuario.findOne({
                where: [{email: nombreUsuario }]
            })
            .then(function(usuarioEncontrado){
                if (usuarioEncontrado){
                    // si puso bien la contra y existe:
                    if ( bcrypt.compareSync(contrasenia, usuarioEncontrado.pass)) {
                        //ponerlos en session.
                        req.session.user = {
                            email: usuarioEncontrado.email,
                            passWord: usuarioEncontrado.pass}
                        
                        //si lo guardo para recordarlo
                        if (recordarme != undefined){
                            res.cookie('Usuario', nombreUsuario, {maxAge: 1000*60*5}),
                            res.cookie('Pass', pass, {maxAge: 1000*60*5})
                        }

                     }  
                
                }return res.redirect('/users/profile');
                
            }).catch (function(e){
                console.log(e);
            })

        } else {
            return res.render ('login', {errors: errors.mapped()})
            // si encuentra errores, le aparecen los mensajes
        } },
            
 

    profile: function(req,res){
        res.render ('profile',{title: 'Profile', data: data});
        
    },
    profileEdit: function (req,res){
        res.render('profile-edit',{title: 'Edit profile', usuario: data.usuario});
    },
    profileEditInfo: function(req,res) {
        let profileForm = req.body;
        db.Usuario.create(profileForm)
        .then(function(result){  //en vez de result va profileForm?
            return res.redirect ('/')
        }).catch (error => console.log(error))
        //lo redirecciona a la pag principal o la de profile?

    }


}

module.exports = userController ;
