var express = require ('express');
var fs = require ('fs');
var path = require ('path');
var app = express();
var PORT = process.env.Port || 7000;

app.use(express.static('public'));
app.use(express.urlencoded({extended :true}));
app.use(express.json());

require('./routes/apiroute.js')(app,fs);
require('./routes/htmlpath.js')(app,fs);



app.listen(PORT,function(){
console.log("app is listening on Port" +PORT)
});


