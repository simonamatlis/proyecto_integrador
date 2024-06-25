const db =require('../database/models');
const producto = db.Producto;
const comentarios = db.Comentarios;


const productController = {


    product: function(req, res){
        let id_producto = req.params.id
        producto.findByPk(id_producto, {
            include: [ { association: "usuario"}, { association: "comentarios" , include: [{ association: "usuario"}]}]
        })
        .then((result)=>{
        //debería poner db.productos?
        res.render('product',{title: 'Detalle del producto', producto: result});
        })
        .catch((err) =>{console.log(err);})

    },
    commentAdd: function(req,res){
        comentarios.create({
            id_producto: req.params.id,
            user_id: req.session.userName.id,
            comentarios: req.body.comentarios,
        })
        res.redirect("/productos/commentAdd" + req.params.id)

    },


    newProduct : function(req,res){
        return res.render("productAdd", {title: "Añadir producto", userName: req.session.userName});
        
        //debería poner db.usuario.id_usuario?
        
    },
    productEdit: function(req,res){
        let id_producto = req.params.id
        producto.findByPk(id_producto)
        .then((result)=>{
            
            return res.render("productEdit",{producto: result})
        })
        .catch((err) => {
            console.log(err);
        });
       
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
        .then(() => {
            res.redirect("/product/" + req.params.id);
        })
        .catch((err) => {
            console.log(err);
        });
        

        
    },
    borrarProducto: function(req,res) {
        let id_producto = req.params.id;
        if(req.session.user != undefined) {
           product.destroy({
            where: { id : id_producto}
        })
        .then(function(result){
            return res.redirect("/profile")
        })
        .catch(function(error){
            return res.send(error)
        })
    } else {
        return res.render("/producto/productos/:id)${req.params.id}")
    
        }

    }
    

};



module.exports = productController ;
