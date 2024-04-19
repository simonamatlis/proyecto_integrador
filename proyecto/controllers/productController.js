const data = require("../db/data");

const productController = {

    newProduct : function(req,res){
        res.render('newProduct', {title: 'Añadir producto', usuario: data.usuario});

    },
    product: function(req, res){
        res.render('product',{title: 'detalle del producto', producto: data.producto});

    }

}; 


module.exports = productController ;
