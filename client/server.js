var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});
app.use(function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(3030);
