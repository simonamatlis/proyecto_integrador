var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();


//producto/agregar

router.get("/productos/:id", productController.product);
router.post("/commentAdd/:id", productController.commentAdd)

router.get('/agregar', productController.newProduct )
router.post('/agregar', productController.guardaInfo );

router.get("/editar/:id" , productController.productEdit);
router.post("/editar/:id", productController.edit_product);
router.post("/productos/:id/borrar", productController.borrarProducto);



module.exports = router;