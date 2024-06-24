var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();


//producto/agregar

router.get("/productos/:id", productController.product);
router.post("/commentAdd/:id", productController.commentAdd)

router.get('/agregar', productController.newProduct )
router.post('/agregarUpdated', productController.guardaInfo );

//router.post("/agregar", productController.productAdd);
//router.post("/agregarUpdated", productController.edit_product)


module.exports = router;