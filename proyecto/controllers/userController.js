const db =require('../database/models');
const bcrypt= require('bcryptjs')

let {validationUser} = require('express-validator')


// EL ALIAS DEL MODELO ES 'Usuario'

const userController = {
    register : function(req,res){
        if (req.session.usuarioLogueado){
            return res.redirect('/users/profile' + req.session.usuarioLogueado.id)} //si ya está registrado, profile. 
        else{
            return res.render('register', {title: 'Registrate', usuario: data.usuario});
    }}, 

    registerInfo : function (req, res) {
       
        let errors = validationUser(req);

        if (errors.isEmpty()){
            db.Usuario.create({
                email: req.body.email,
                id_user: req.body.user,
                contra: bcrypt.hashSync(req.body.contrasenia,10), // passw encriptada + sincronizada c/el formulario
                fecha: req.body.fecha,
                dni: req.body.documento,
                profilePic: req.body.fotoPerfil
            }); res.redirect('/users/profile')
        } else {
            res.render('login', {
                errors: errors.mapped(),
                old: req.body});
        }
        
    },


    login : function (req,res){
            if (req.session.usuarioLogueado){
                return res.redirect('/profile' + result.id)}
            else{
                return res.render('login', {title: 'login'});
    }},


    loginInfo: function (req,res){
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
                            res.cookie('Usuario', nombreUsuario.id, {maxAge: 1000*60*5})
                            
                        }

                     }  
                
                }return res.redirect('/users/profile' + nombreUsuario.id);
                
            }).catch (function(e){
                console.log(e);
            })

        } else {
            return res.render ('login', {
                errors: errors.mapped(),
                old: req.body
            })
            // si encuentra errores, le aparecen los mensajes
            
        } },
            
 
    // FALTA PROFILE
    profile: function(req,res){
        //params porq es id. 
        let id = req.params.id;
        //para que aparezcan los productos /comentarios de forma ordenada
        let modelos = {
            include:[{association: 'producto'},
            {association: 'comentarios'} ],
            order: [{model: db.Producto, as: 'producto'}, 'createdAt', 'DESC']
        }

        db.Usuario.findByPk(id, modelos)
        .then(function(usuario){
            if ( req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.id == usuario.id){
                return res.render('profile', {
                    title: `${usuario.mail}`,
                    usuario: usuario,
                    productos: usuario.producto,
                    comentarios: usuario.comentarios.length
             } )
                
            } else {
                return res.status(404).send("Usuario no encontrado");
                
            }
        }. catch(function(error){
            console.log(error)
        })

        )
    },
    // FALTA REVISAR TODO EL EDIT 
    profileEdit: function (req,res){
        
        if (req.session.usuarioLogueado){
            let id = req.session.usuarioLogueado.id;

            db.Usuario.finfByPk(id)
            .then(function(usuario){
                res.render('profile-edit',{title: 'Edit profile', usuario: data.usuario})
             })
            .catch(function(error){
                console.log(error)
            });
       }else {
            return res.redirect('/login')
       }
       
    },
    profileEditInfo: function(req,res) {
        let errors = validationUser(req);

        if (errors.isEmpty()){

        }

       


    },
    logOut: function(req,res) {
        req.session.destroy()
        res.clearCookie(Usuario)
        return res.redirect('/')
        
    }


}

module.exports = userController ;
