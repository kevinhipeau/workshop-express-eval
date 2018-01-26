var express = require('express')
var app = express();
var fs = require('fs');

app.get('/bingo', function (req, res) {
    fs.readFile('src/numbers.txt', 'utf8', function (err, data) {
        var lines = data.split('\n');;
        var tmp = "";
        lines.forEach(function (item) {
            tmp = tmp + item + ",";
        });
        res.send(tmp.substring(0, tmp.length - 2));
    });
})

module.exports = app;