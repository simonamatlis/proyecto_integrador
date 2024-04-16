const data= require ('../db/data')

const indexController = {
    index: function(req,res){   
       return res.render("index",{ productos: data.producto} )
    },
    search: function(req, res){
        res.render('search-results');
    }
}

module.exports = indexController;
  