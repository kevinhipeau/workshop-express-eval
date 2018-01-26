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
        var num = tmp.substring(0, tmp.length - 2);
        if (req.query.mynumbers) {
            if (req.query.mynumbers === num.replace(/\s/g, '')) {
                res.send("Bingo")
            } else {
                res.send("The bingo game is already started, sorry your numbers doesn't match with known numbers "
                    + num
                    + " ; so you can not say Bingo");
            }
        } else {
            res.send("The bingo game is already started and known numbers are " + num)
        }
    });
})

module.exports = app;