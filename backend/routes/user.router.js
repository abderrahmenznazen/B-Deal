const express =require ('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user.controller');
const Favlist = require('../models/favList.model');

router.post('/login', userController.postLogIn)
      .post('/register',userController.createUser)
      .get('/authenticated', userController.getUser)
      .get('/logout', userController.logOut)
      .get('/admin', userController.isAdmin)
      .post('/favlist', userController.addToFAv)
      

module.exports=router 