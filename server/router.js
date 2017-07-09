let router = require('express').Router();
let handler = require('./handlers/product');

router.get('/test1', handler.test1);
router.get('/test2', handler.test2);
router.get('/selectall', handler.selectAll);
router.post('/insert', handler.insert);
module.exports = router;