
const db =require('../database/models');

const userController = {
    register : function(req,res){
        res.render('register',{title: 'Register'});

    },
    registerInfo : function (req, res) {
        let registerForm = req.body;
        db.usuario.create(registerForm)
        .then(function (result) { // en vez de result va registerForm?
            return res.redirect ('/')     
        }).catch (error => console.log(error))
        
    },
    login : function (req,res){
        res.render('login', {title: 'login', usuario: data.usuario});
    },
    loginInfo: function (req,res){
        let loginForm = req.body;
        db.usuario.create(loginForm)
        .then(function(result){  //en vez de result va loginForm?
            return res.redirect ('/')
        }).catch (error => console.log(error))
        //lo redirecciona a la pag principal o la de profile?

    }, 
    
    profile: function(req,res){
        res.render ('profile',{title: 'Profile', data: data});
        
    },
    profileEdit: function (req,res){
        res.render('profile-edit',{title: 'Edit profile', usuario: data.usuario});
    },
    profileEditInfo: function(req,res) {
        let profileForm = req.body;
        db.usuario.create(profileForm)
        .then(function(result){  //en vez de result va profileForm?
            return res.redirect ('/')
        }).catch (error => console.log(error))
        //lo redirecciona a la pag principal o la de profile?

    }


}

module.exports = userController ;
