const data = require("../db/data");

const productController = {

    newProduct : function(req,res){
        res.render('productAdd', {title: 'Añadir producto', userName: data.usuario.userName});

    },
    product: function(req, res){
        res.render('product',{title: 'detalle del producto', producto: data.producto});

    }

}; 


module.exports = productController ;
