const express =require ('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.post('/login', userController.postLogIn)
      .post('/register',userController.createUser)
      .get('/users', userController.getUser)

module.exports=router