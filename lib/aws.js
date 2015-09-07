// http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-examples.html
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var bucket = 'tecla-cms';
s3.createBucket({Bucket: bucket}, function() {
  var params = {Bucket: bucket, Key: bucketKey, Body: 'Hello!'};
  s3.putObject(params, function(err, data) {
    if (err) console.log(err)
    else
      console.log("Successfully uploaded data to myBucket/myKey");
   });
});

// THIS is the way!!! Except no reason to gzip
var fs = require('fs');
var zlib = require('zlib');

var body = fs.createReadStream('bigfile').pipe(zlib.createGzip());
var s3obj = new AWS.S3({params: {Bucket: 'myBucket', Key: 'myKey'}});
s3obj.upload({Body: body}).
  on('httpUploadProgress', function(evt) { console.log(evt); }).
  send(function(err, data) { console.log(err, data) });
