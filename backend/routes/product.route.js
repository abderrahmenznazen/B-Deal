const express =require ('express');
const router = express.Router();

const ProductController= require('../controllers/product.controller')

router.get('/', ProductController.getAllProducts)
      .post('/',ProductController.addNewProduct)

module.exports = router;