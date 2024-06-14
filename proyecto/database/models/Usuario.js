module.exports = function(sequelize, dataTypes) {

    //alias
    let alias = 'Usuario'
    //cols: tipo de dato que recibe.
    let cols= {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        }, 
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contra:{
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: true
        }, 
        dni: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        profilePic:{ 
            type: dataTypes.STRING,
            allowNull: true
        },
        updatedAt:{ 
            type: dataTypes.DATE,
            
        },
        deletedAt: {
            type: dataTypes.DATE
        }, 
        createdAt: {
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