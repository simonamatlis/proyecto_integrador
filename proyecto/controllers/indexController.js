const data= require ('../db/data')

const indexController = {
    index: function(req,res){   
       return res.render("index",{ productos: data.producto} )
    }
}

module.exports = indexController;
  