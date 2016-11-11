var express = require('express');

var bcrypt = require('bcryptjs');


var app = express();

var posts = require(__dirname + '/../routes/posts');
app.use('/posts', posts);

app.get('/', function (req, res, next) {
res.render('nothing');
});

module.exports = app;
