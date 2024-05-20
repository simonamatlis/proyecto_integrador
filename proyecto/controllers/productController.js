const db =require('../database/models');

const productController = {

    newProduct : function(req,res){
        return res.render('productAdd', {title: 'Añadir producto', userName: data.usuario.userName});

    },
    product: function(req, res){
        res.render('product',{title: 'detalle del producto', producto: data.producto});

    },
    guardaInfo: function(req, res){
        //return res.send(req.body)
        let form = req.body;
        db.productos.create(form)
        .then(function(result){
            return res.redirect ('/product')
        }).catch (error => console.log(error))
    }
    

}; 


module.exports = productController ;
