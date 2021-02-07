var path = require ("path");
var express = require ('express');
var fs = require ('fs');
var app = express();

module.exports = function (app,fs){

    app.get ('/', function (req,res){
        res.sendFile(path.join(__dirname,'../public/index.html'));

    });

app.get('/notes', function(req,res){
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});
}