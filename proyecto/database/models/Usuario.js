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
    }, }

//config
let config= {
    tableName: 'usuario',
    timestamps: true, 
    underscored: true
}


let Usuario = sequelize.define(alias, cols, config)
return Usuario





}