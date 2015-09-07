var express = require('express');
var http = require('http');
var path = require('path');
var AWS = require('aws-sdk');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart({ uploadDir: __dirname + '/uploads', limit: '50mb' }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// https://github.com/aws/aws-sdk-js

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/file-upload', function(req, res) {
  console.log(req.files.file.name + ' has been uploaded');
  res.send(200);
});

app.post('/upload', function(req, res) {
  console.log(req.files.file.name + ' has been uploaded');

  // To get a relative path of uploaded files use:
  //  req.files.file.split('/').slice(-2).join('/') to get uploads/13176-vb5sb9.zip
  var bucket = {
    name: 'tecla-cms',
    key: 'AKIAI32FKR4KSD2NJRUA'
  }
  // Do something with file here:
  // Save file metadata to database
  // Upload file to Amazon S3
  var body = fs.createReadStream(req.files.file);
  var s3obj = new AWS.S3({
    params: {
      Bucket: bucket.name,
      Key: bucket.key
    }
  });

  s3obj.upload({Body: body}).
    on('httpUploadProgress', function(evt) {
      console.log(evt);
    }).send(function(err, data) {
      if (err) {
        console.log('Error uploading data:', err);
      } else {
        console.log('Successfully uploaded data to:' + bucket.name + ' ' + bucket.key);
        fs.unlink(req.files.userFile.path, function(err) {
          console.log(req.files.userFile.name + ' has been deleted');
        });
    });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
