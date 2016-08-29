var fs = require('fs');
var express = require('express');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage});
var app = express()

app.post('/upload', upload.array('files', 12), function (req, res, next) {

    req.files.forEach(function (file) {
        //it's just an example, let's use synced versions of fs functions
        //USE ASYNC IN PRODUCTION!
        console.log('file', file);
    });

    res.status(200).json({status: 'ok'});
});

app.get('/', function (req, res) {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.get('/ajax-upload.js', function (req, res) {
    fs.createReadStream(__dirname + '/../dist/index.js').pipe(res);
});

app.listen(3000);
console.log('http://localhost:3000');