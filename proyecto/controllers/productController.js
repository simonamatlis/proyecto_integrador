let productController = {
    newProduct : function(req,res){
        res.render('newProduct');

    },
    product: function(req, res){
        res.render('product');

    }
}; 

module.exports = productController ;