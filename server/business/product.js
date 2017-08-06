let models = require('../models');

module.exports = {
    selectAll(options) {
        options = options || {};
        let projection = options.projection || {},
            query = options.query || {},
            order = options.order || {description: 1},
            skip = options.skip || 0,
            take = options.take === 0 ? options.take : options.take || 10;

        return models.Product.find(query/*, projection*/)//.sort(order).skip(skip).limit(take);

    },
    insert(newProduct, callback) {
        let product = new models.Product(newProduct);
        return product.save(callback);

    },

    update(product) {
        return models.Product.findByIdAndUpdate(product._id, product, {new: true});
    },

    remove(id) {
        return models.Product.find({_id: id}).remove();
    },

    count(query) {
        return models.Product.count(query)
    },
    select(id) {

        return models.Product.findOne(id);
    },

    selectById(id) {
        return  models.Product.findById(id);
    },
};
