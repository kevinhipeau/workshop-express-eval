var express = require('express')
var app = express();

app.get('/bingo', function (req, res) {
    res.send('Bingo')
})

module.exports = app;