const db =require('../database/models');
const producto = db.Producto;
const comentarios = db.Comentarios;

const productController = {


    product: function(req, res){
        let id_producto = req.params.id
        producto.findByPk(id_producto, {
            include: [ { association: "usuario"}, { association: "comentarios" , include: [{ association: "usuario"}]}]
        })
        .then((data)=>{
        //debería poner db.productos?
        res.render('product',{title: 'detalle del producto', producto: data.producto});
        })
        .catch((err) =>{console.log(err);})

    },


    newProduct : function(req,res){
        producto.findByPk(id, {
            include: [ { association: "usuario"}, { association: "comentarios" , include: [{ association: "usuario"}]}]
        })
        .then((data)=>{
            return res.render('productAdd', {title: 'Añadir producto', userName: data.usuario.userName});

        })
        //debería poner db.usuario.id_usuario?
        
    },
    
    guardaInfo: function(req, res){
        //return res.send(req.body)
        let form = req.body;
        db.productos.create(form)
        .then(function(result){ // en vez de result va form?
            return res.redirect ('/product')
        }).catch (error => console.log(error))
    }
    

}; 


module.exports = productController ;
