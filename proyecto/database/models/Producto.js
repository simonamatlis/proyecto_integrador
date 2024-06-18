module.exports = function(sequelize, dataTypes) {

    let alias = "Producto"
    let cols = {
        id_producto : {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id : {
            type: dataTypes.INTEGER,
        },
        nombre_imagen : {
            type: dataTypes.STRING,
        },
        nombre_producto : {
            type: dataTypes.STRING,
        },
        descripcion_producto : {
            type: dataTypes.STRING,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE
        } };

    let config= {
        tableName: 'producto',
        timestamps: true, 
        underscored: true 
    };

    let Producto = sequelize.define(alias, cols, config)

    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: 'user_id'
        }),

        Producto.hasMany(models.Comentarios, {
            as: "comentarios",
            foreignKey: "producto_id"
        })
    };
    
    return Producto










}