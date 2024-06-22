const db = require('../database/models');
const op = db.Sequelize.Op
const indexController = {
    index: function(req,res){  
      db.Producto.findAll({include: [ { association: "usuario"}], order: [ [ "createdAt" , "DESC"]]})

      .then(function (result) { 
        //return res.send(result)
      
        return res.render("index",{title: 'Sara', productos: result} )
      },)
      
      .catch(function (error) {
        console.log(error);

      });
    },
      
      
    search: function(req, res){
      db.Producto.findAll({
        where: { 
          [ op.or] : [
            { nombre_producto: {[ op.like]: "%"+ req.query.search+ "%"}}, 
            { descripcion_producto: {[ op.like]: "%"+ req.query.search+ "%"}}

          ]

        }, 
        order: [[ "createdAt", "DESC"]], 
        include: [ { association: "usuario"}],
      })
      .then(function(result){
        //return res.send(result) 
        res.render('search-results', {title: 'Resultados', productos: result });

      })
        
    },
}

module.exports = indexController;
  