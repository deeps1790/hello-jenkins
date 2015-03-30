var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log('hello world');
});

app.listen(process.env.PORT || 3001);

module.exports = app;