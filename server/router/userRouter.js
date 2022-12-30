const express = require('express')
const router = express.Router()
const {userRegister,signin} = require('../controller/userCtrl')
const {createProduct} = require('../controller/productCantroller')



router.post('/login',signin)
router.post('/register',userRegister,userRegister)
router.post('/getProduct',createProduct)



module.exports = router;