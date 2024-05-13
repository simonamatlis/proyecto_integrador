const db =require('../database/models');

const indexController = {
    index: function(req,res){   
      res.render("index",{title: 'Sara', productos: data.producto} )
    },
    search: function(req, res){
        res.render('search-results', {title: 'Resultados', productos: data.producto, userName: userName});
    }
}

module.exports = indexController;
  