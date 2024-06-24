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
        res.render('product',{title: 'Detalle del producto', producto: data});
        })
        .catch((err) =>{console.log(err);})

    },
    commentAdd: function(req,res){
        comentarios.create({
            id_producto: req.params.id,
            user_id: req.session.userName.id,
            comentarios: req.body.comentarios,
        })
        return res.redirect("producto/productos/"+ req.params.id)

    },


    newProduct : function(req,res){
        return res.render("productAdd", {title: "Añadir producto", userName: data.usuario.userName});
        
        //debería poner db.usuario.id_usuario?
        
    },
    productEdit: function(req,res){
        let id_producto = req.params.id
        producto.findByPk(id_producto)
        .then((data)=>{
            console.log(data);
            return res.render("productAdd",{producto: data})
        })
       
    },
        
    
    guardaInfo: function(req, res){
        //return res.send(req.body)
        let form = req.body;
        db.productos.create(form)
        .then(function(result){ // en vez de result va form?
            return res.redirect ('/product')
        }).catch (error => console.log(error))
    },
    edit_product: function(req,res){
        producto.update({
            nombre_imagen: req.body.nombre_imagen,
            nombre_producto: req.body.nombre_producto,
            descripcion_producto: req.body.descripcion_producto
        }, {
            where: { id_producto: req.params.id}

        })
        return res.redirect("/")
    }
    

}; 



module.exports = productController ;
