const express = require('express'),
    app = express(),
    routes = require('./routes'),
    config = require('../config');

app.use('/', routes);

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.send({'not-found': true});
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.send({
        'server-error': true,
        message: err.message,
        stack: err.stack
    });
});

module.exports = app;
