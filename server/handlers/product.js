let product = require('../business/product');
let productHandler = {
    selectAll(req, res, next) {
        let options = req.body;
        product.selectAll(options).exec(function (err, products) {
            if (err) return next(err);
            res.send(products || []);
        });
    },
    count(req, res, next) {
        let options = req.body;
        product.count(options).exec(function (err, count) {
            if (err) return next(err);
            res.send({count});
        });
    },
    insert(req, res, next){
        let newProduct = req.body;
      product.insert(newProduct, function (err, product) {
          if (err)return next(err);
          res.send(product._id);
      });
    },
    remove(req, res, next){
        let delProduct = req.body;
        product.remove(delProduct, function (err, product) {
            if (err)return next(err);
            res.send(product._id);
        })
    }
};
module.exports = productHandler;


