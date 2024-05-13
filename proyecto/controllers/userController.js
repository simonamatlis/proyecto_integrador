
const db =require('../database/models');

const userController = {
    register : function(req,res){
        res.render('register',{title: 'Register'});

    },

    login : function (req,res){
        res.render('login', {title: 'login', usuario: data.usuario});
    },
    profile: function(req,res){
        res.render ('profile',{title: 'Profile', data: data});
        
    },
    profileEdit: function (req,res){
        res.render('profile-edit',{title: 'Edit profile', usuario: data.usuario});
    }

}

module.exports = userController ;
