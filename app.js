var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log('hello world');
});

app.listen(process.env.PORT || 8585);

module.exports = app;