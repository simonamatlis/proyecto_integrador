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
            },
         createdAt: {
                type: dataTypes.DATE
            },
        updatedAt:{
                type: dataTypes.DATE,
            },
        deletedAt: {
                type: dataTypes.DATE
            } };

    let config = {
            tableName: 'comentarios',
            timestamps: true, 
           // underscored: true 
        };


    let Comentario = sequelize.define(alias, cols, config)

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto, {
            as: "producto" , 
            foreignKey: "producto_id"
        }),
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "user_id"
        })
    }
    return Comentario
    
    

}