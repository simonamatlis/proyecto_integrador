var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();


//producto/agregar

router.get("/productos", productController.product)
router.get('/agregar', productController.newProduct );


module.exports = router;