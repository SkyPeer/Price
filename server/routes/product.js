let router = require('express').Router();
let handler = require('../handlers/product');

router.get('/selectall', handler.selectAll);
router.get('/count', handler.count);
router.post('/insert', handler.insert);
router.post('/remove', handler.remove);
router.post('/select', handler.select);
router.post('/update', handler.update);

module.exports = router;