let router = require('express').Router();
let product = require('./product');

router.use('/product', product);
module.exports = router;
