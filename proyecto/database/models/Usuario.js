const { config } = require("../../.sequelizerc");

module.exports = function(sequelize, dataTypes) {

    //alias
    let alias = 'Usuario'
    //cols
    let cols= {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        }, 
        email: {
            type: dataTypes.STRING,
        },
        contra:{
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
        }, 
        dni: {
            type: dataTypes.INTEGER,
        },
        profilePic:{
            type: dataTypes.STRING
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE
        }
        

            
    };
    //config
    let config= {
        tableName: 'usuario',
        timestamps: true, 
        underscored: true
    };


    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "producto",
            foreignkey: "user_id"
        });
        Usuario.hasMany(models.Comentarios,{
            as: 'comentarios', 
            foreignkey: 'user_id'
        })
    }


    return Usuario;





}