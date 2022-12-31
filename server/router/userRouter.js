const express = require('express')
const router = express.Router()
const {userRegister,signin} = require('../controller/userCtrl')
const {createProduct,getAllproduct,updateproduct,DeleteProduct, getsingleproduct} = require('../controller/productCantroller')



router.post('/login',signin)
router.post('/register',userRegister,userRegister)
router.post('/createproduct',createProduct)
router.get('/allproduct',getAllproduct)
router.put('/updateProduct/:id',updateproduct)
router.delete('/deletepro/:id',DeleteProduct)
router.get('/singleproduct/:id',getsingleproduct)





module.exports = router;
