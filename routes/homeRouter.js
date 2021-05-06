const express = require ('express');
const router = express.Router();
const controller = require('../controller/homeController');


router.get('/raiz', controller.raiz)
router.get('/producto', controller.producto)

module.exports=router;