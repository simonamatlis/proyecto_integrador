const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');




// EL ALIAS DEL MODELO ES 'Usuario'

const userController = {
    register : function(req,res){
        if (req.session.usuarioLogueado != undefined){
            return res.redirect('/users/profile' + req.session.usuarioLogueado.id)} //si ya está registrado, profile. 
        else{
            return res.render('register', {title: 'Registrate'});
    }
    }, 

    registerInfo : function (req, res) {
        let errors = validationResult(req);
        // console.log(errors);

       if (errors.isEmpty()){
          //  console.log(req.body);}
            //console.log('req.body.profilePic:', req.body.profilePic);}
            
            db.Usuario.create({
                email: req.body.email,
                usuario: req.body.usuario,
                contra: bcrypt.hashSync(req.body.contra,10), // passw encriptada + sincronizada c/el formulario
                fecha: req.body.fecha,
                dni: req.body.dni,
                profilePic: req.body.profilePic
            })
            .then(function(result){
                return res.redirect('/users/login');
            })
            .catch(function(e){
                console.log(e)}
            );

        } else { return res.render('register', { title: 'Registrate',
            errors: errors.mapped(),
            old: req.body});}
    },

    login: function (req,res){
            if (req.session.usuarioLogueado != undefined){
                return res.redirect('/profile' + req.session.usuarioLogueado.id)}
            else{
                return res.render('login', {title: 'login'})
    }},

    loginInfo: function (req,res){

        let errors = validationResult(req);
        //return res.send(errors)
        
        // TRAIGO DEL FORM LA DATA Y LO GUARDO EN LA COOKIE PARA EL USO DE LA SESSION
            let nombreUsuario = req.body.email; // traigo del formulario el mail y lo guardo.
            req.session.nombreUsuario = nombreUsuario;

            let pass = req.body.contra;
            req.session.pass = pass; 
            
            let recordarme = req.body.recordarme;
            req.session.guardar = recordarme; 

           
          
            
            
            // los errores que traigo de la validación, parte almacenada en ruta
            if (errors.isEmpty ()){
                db.Usuario.findOne({ where: { email: nombreUsuario } })
                .then(function(usuarioEncontrado){
                    console.log('====> usuarioEncontrado = : ' , usuarioEncontrado)
                    if (usuarioEncontrado != null ){
                        
                         console.log('==== usuarioEncontrado req.session = : ' ,req.session.usuarioEncontrado)
                         console.log('==== 2 usuarioEncontrado req.session = : ' ,usuarioEncontrado)

                        if (recordarme != undefined){

                            console.log('== paso por aca ....' )
                            console.log('== controller id  = : ' ,usuarioEncontrado)

                            res.cookie('Usuario', usuarioEncontrado.id_usuario  , {maxAge: 1000*60*5})
                            console.log('Usuario DEFINIDO  = : ' ,usuarioEncontrado)
                        }

                        console.log('TOMA EL ID: ' ,usuarioEncontrado.id_usuario)
                        return res.redirect('/users/profile' + usuarioEncontrado.id_usuario);
                        
                     } else {
                        return res.redirect('/users/login');
                         }
                }).catch (function(e){
                            console.log(e);
                        });
                      
            } else {
                res.render ('login', { title: 'Login',
                    errors: errors.mapped(),
                    old: req.body
                })
                // si encuentra errores, le aparecen los mensajes
                
            } 


    },
            
    // FALTA VIEW PROFILE --> parte producto. 
    profile: function(req,res){
        //params porq es id. 
        let id = req.params.id;
        //para que aparezcan los productos /comentarios de forma ordenada
        let modelos = {
            include:[{association: 'producto'},
                      {association: 'comentarios' }],
            order: [{model: db.Producto, as: 'producto'}, 'createdAt', 'DESC']
        }

        db.Usuario.findByPk(id, modelos)
        .then(function(usuario){
            if ( req.session.usuarioLogueado && req.session.usuarioLogueado.id == results.id)
            return res.render('profile', {title: `${usuario.email}`, usuario: usuario, productos: usuario.producto, comentarios: usuario.comentarios.legth});
        }). catch(function(error){
            console.log(error)
        })
    },
    // FALTA REVISAR TODO EL EDIT 
    profileEdit: function (req,res){
        
        if (req.session.usuarioLogueado != undefined){
            let id = req.session.usuarioLogueado.id;

            db.Usuario.finfByPk(id)
            .then(function(usuario){
                if(usuario) {
                    return res.render('profile-edit',{title: 'Edit profile', usuario: usuario});
                } 
                else{
                   return function(error){
                   console.log(error)}}
                })
            .catch(function(error){
                console.log(error)
            });
       }else {
            return res.redirect('/login')
       }
       
    },
    profileEditInfo: function(req,res) {
        let errors = validationResult(req);

        if (errors.isEmpty()){

            let viejo= {
                    emailUser:  req.body.email,
                    nombreUser: req.body.usuario,
                    contraUser: bcrypt.hashSync(req.body.contra,10),
                    fechaUser : req.body.fecha,
                    dniUser: req.body.dni,
                    profilePicUser: req.body.profilePic
                }  

                db.Usuario.update(viejo, {where:{id: req.session.usuarioLogueado.id}})
                .then(function(result)
                {
                    req.session.usuarioLogueado.emailUser = req.body.email; 
                
                    req.session.usuarioLogueado.nombreUser = req.body.usuario;
                    
                    req.session.usuarioLogueado.contraUser = bcrypt.hashSync(req.body.contra,10);
                    
                    req.session.usuarioLogueado.fechaUser= req.body.fecha;
                    
                    req.session.usuarioLogueado.dniUser= req.body.dni;
                    
                    req.session.usuarioLogueado.profilePicUser = req.body.profilePic

                    res.locals.user = req.session.usuarioLogueado

                    return res.redirect('/profile' + req.session.usuarioLogueado.id);
                })
                .catch(function(error){
                    console.log(error)
                })
        }else {

                    db.Usuario.findByPk(req.session.usuarioLogueado.id)
                    .then(function(usuario){
                        return res.render('profile-edit', {title: 'Edita tu perfil', errors: errors.mapped()
                    , old: req.body, usuario: usuario })
                    })
                    .catch(function(error){
                        console.log(error)
                    });
            }
   
    },

    logOut: function(req,res) {
        req.session.destroy()
        res.clearCookie(Usuario)
        return res.redirect('/')
        
    }


}

module.exports = userController ;
