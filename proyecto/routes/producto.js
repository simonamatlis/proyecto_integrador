var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//producto/agregar

router.get('/agregar', productController.newProduct );


module.exports = router;