
const db =require('../database/models');

const userController = {
    register : function(req,res){
        res.render('register',{title: 'Register'});

    },

    login : function (req,res){
        res.render('login', {title: 'login', usuario: data.usuario});
    },
    loginInfo: function (req,res){
        let form = req.body;
        db.productos.create(form)
        .then(function(result){
            return res.redirect ('/product')
        }).catch (error => console.log(error))

    }, 
    // corregir y cambiar según la función. Falta routes y vistas.
    profile: function(req,res){
        res.render ('profile',{title: 'Profile', data: data});
        
    },
    profileEdit: function (req,res){
        res.render('profile-edit',{title: 'Edit profile', usuario: data.usuario});
    }

}

module.exports = userController ;
