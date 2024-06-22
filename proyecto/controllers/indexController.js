const db = require('../database/models');

const indexController = {
    index: function(req,res){  
      db.Producto.findAll({include: [ { association: "usuario"}]})

      .then(function (result) {
        return res.render("index",{title: 'Sara', productos: result} )
      },)
      
      .catch(function (error) {
        console.log(error);

      });
    },
      
      
    search: function(req, res){
        res.render('search-results', {title: 'Resultados', productos: data.producto, userName: userName});
    },
}

module.exports = indexController;
  