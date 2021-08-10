const express =require ('express');
const router = express.Router();

const ProductController= require('../controllers/product.controller')

router.get('/', ProductController.getAllProducts)
      .post('/', ProductController.addNewProduct)
      .get('/:id', ProductController.findProductById)
      .put('/:id', ProductController.updateProduit)
      .delete('/:id', ProductController.deleteProduit)

module.exports = router;