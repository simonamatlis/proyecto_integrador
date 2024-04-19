const data = require("../db/data");

const userController = {
    register : function(req,res){
        res.render('register',{title: 'Register'});

    },

    login : function (req,res){
        res.render('login', {title: 'login', usuario: data.usuario});
    },
    profile: function(req,res){
        res.render ('profile',{title: 'Profile', usuario: data.usuario});
        
    },
    profileEdit: function (req,res){
        res.render('profileEdit',{title: 'Edit profile', usuario: data.usuario});
    }

}

module.exports = userController ;
