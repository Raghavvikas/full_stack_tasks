const router = require('express-promise-router')();

const productController = require('../controllers/product.controller');

// controller is being established within the path to call the API 
router.post('/products', productController.createProduct);

// route to get the product list
router.get('/products', productController.readProductList);

// route to get the product with specified ID attribute
router.get('/products/:id', productController.ProductByID);


// route to update the product by using ID
router.put('/products/:id', productController.updateProductByID);



// route to delete the product by using ID
router.put('/products/:id', productController.deleteProductByID);

module.exports = router;