let config = require('../../config.json');
let mongoose = require('mongoose');
let base = config.system.base;
mongoose.connect('mongodb://127.0.0.1:27017/' + base);

mongoose.connection.on('connected', function () {
    console.log('Mongoose подключен к базе '+ base );
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
module.exports = mongoose;