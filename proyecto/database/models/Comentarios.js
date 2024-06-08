module.exports = function(sequelize, dataTypes) {
    
    
let alias = "Comentarios"

let cols = {
    id_comentario: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,  
        },
    user_id: {
        type: dataTypes.INTEGER,
        },
    producto_id: {
        type: dataTypes.INTEGER,
        },
    comentario: {
        type: dataTypes.STRING,
        } }

let config = {
        tableName: 'comentario',
        timestamps: true, 
        underscored: true 
    }


let Comentario = sequelize.define(alias, cols, config)

Comentario.associate = function(models){
    Comentario.belongsTo(models.Producto, {
        as: "producto" , 
        foreignkey: "producto_id"
    }),
    Comentario.belongsTo(models.User, {
        as: "usuario",
        foreignkey: "user_id"
    })
}
return Comentario
    
    

}