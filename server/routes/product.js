let router = require('express').Router();
let handler = require('../handlers/product');

router.get('/selectall', handler.selectAll);
router.get('/count', handler.count);
router.post('/insert', handler.insert);

module.exports = router;