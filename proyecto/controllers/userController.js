const db =require('../database/models');
const bcrypt= require('bcryptjs')
//falta la parte de conectar la base de datos + vista indicada.
const userController = {
    register : function(req,res){
        if (req.session.Usuario){
            return res.redirect('/users/login')} //si ya está registrado, andá a login. 
        else{
            return res.render('register', {title: 'Registrate', usuario: data.usuario});
    }}, // revisar tema de session y cookies para corregirlo. 
    registerInfo : function (req, res) {
        db.Usuario.create({
            email: req.body.email,
            id_user: req.body.user,
            contra: bcrypt.hashSync(req.body.contrasenia,10), // passw encriptada + sincronizada c/session 
            fecha: req.body.fecha,
            dni: req.body.documento,
            profilePic: req.body.fotoPerfil
        })
        .then(function (result) { 
            return res.redirect ('/')     
        }).catch (error => console.log(error))
        
    },
    login : function (req,res){
            if (req.session.Usuario){
                return res.redirect('/')}
            else{
                return res.render('login', {title: 'login', usuario: data.usuario});
    }},
    // loginInfo\logOut.
    // 
    //     //para esto ver video cookies
    //     //usa el findbyPk o algo así 
    //

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
