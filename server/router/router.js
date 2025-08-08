const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController.js')
const BlogController =require('../controller/BlogController.js')


router.post('/login',UserController.login)

router.post('/signup',UserController.signup)

router.post('/create',BlogController.create);

router.get('/blogall',BlogController.getall);

router.get('/blogbyid/:id',BlogController.getbyid);

router.get('/blogallbyid/:id',BlogController.getallbyid);

router.put('/blogupdate/:id',BlogController.update);

router.delete('/blogdelete/:id',BlogController.delete);



module.exports = router
