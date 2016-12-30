var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.listen(4000, console.log('server is running on 4000, bitch'));