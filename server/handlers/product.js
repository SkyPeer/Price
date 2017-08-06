let productBll = require('../business/product');
let productHandler = {
    selectAll(req, res, next) {
        let options = req.body;
        productBll.selectAll(options).exec(function (err, products) {
            if (err) return next(err);
            res.send(products || []);
        });
    },
    count(req, res, next) {
        let options = req.body;
        productBll.count(options).exec(function (err, count) {
            if (err) return next(err);
            res.send({count});
        });
    },
    insert(req, res, next){
        let newProduct = req.body;
      productBll.insert(newProduct, function (err, product) {
          if (err)return next(err);
          res.send(product._id);
      });
    },
    remove(req, res, next){
        let id = req.body.id;
        productBll.remove(id).exec(function (err) {
            if (err)return next(err);
            res.send({result:"ok"});
        })
    },
    update(req, res){
        let newProduct = req.body;
        productBll.update(newProduct).exec(function (err) {
            if (err)return next(err);
            res.send({result:"ok"});
        })
    },
    select(req, res, next) {
        let id = req.body.id;
        productBll.select({_id:id}).exec(function (err, products) {
            if (err) return next(err);
            res.send(products || []);
        });
    },
};
module.exports = productHandler;


