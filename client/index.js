const express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    config = require('../config.json');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'build')));
//app.use('/', express.static(path.join(__dirname, 'favicon')));
//app.use('/', express.static(path.join(__dirname, 'images')));
//app.use('/', express.static(path.join(__dirname, 'fonts')));
app.use('*', function (req, res, next) {
    res.sendFile('index.html', {root: __dirname});
});



module.exports = app;