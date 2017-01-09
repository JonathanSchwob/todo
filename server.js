var express = require('express');

var app = express();

var example = 'send me back to the client';

app.use(express.static(__dirname));

app.listen(4000, console.log('bro'));

