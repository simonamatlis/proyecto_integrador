

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
        } }

    let config= {
        tableName: 'producto',
        timestamps: true, 
        underscored: true 
    }

    let Producto = sequelize.define(alias, cols, config)
return Producto










}