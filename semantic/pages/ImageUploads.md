Image Uploads
-------------

jQuery File Upload

http://sahatyalkabov.com/jsrecipes/#!/backend/uploading-files

### DropZone

*DropZone* is identical to simple file upload forms like this:

```html
<form action="" method="post" enctype="multipart/form-data">
  <input type="file" name="file" />
</form>
```

### Start server

`node app.js`

Wiki
----

https://github.com/enyo/dropzone/wiki

Custom configuration
--------------------

See [Events](http://www.dropzonejs.com/#event-list)

```js
// "myAwesomeDropzone" is the camelized version of the HTML element's ID
Dropzone.options.myAwesomeDropzone = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  acceptedFiles: 'image/*',
  accept: function(file, done) {
    if (file.name == "justinbieber.jpg") {
      done("Naha, you don't.");
    }
    else { done(); }
  }
  init: function() {
    this.on("addedfile", function(file) {
      alert("Added file.");
    });

    this.on("sending", function(file, xhr, formData) {
      // Will send the filesize along with the file as POST data.
      formData.append("filesize", file.size);
    });

    this.on("uploadprogress", function(file, percentage, bytesSent) {
    });

    this.on("success", function(file) {

    });

    this.on("error", function(file, message) {
      alert(message);
    });
  },
  uploadComplete: function(file) {

  }
};
```

### Server

Express, `req.files`

```js
{
  displayImage: {
    size: 11885,
    path: '/tmp/1574bb60b4f7e0211fd9ab48f932f3ab',
    name: 'avatar.png',
    type: 'image/png',
    lastModifiedDate: Sun, 05 Feb 2012 05:31:09 GMT,
    _writeStream: {
      path: '/tmp/1574bb60b4f7e0211fd9ab48f932f3ab',
      fd: 14,
      writable: false,
      flags: 'w',
      encoding: 'binary',
      mode: 438,
      bytesWritten: 11885,
      busy: false,
      _queue: [],
      drainable: true
    },
    length: [Getter],
    filename: [Getter],
    mime: [Getter]
  }
}
```

```js
fs.readFile(req.files.displayImage.path, function (err, data) {
  // ...
  var newPath = __dirname + "/uploads/uploadedFileName";
  fs.writeFile(newPath, data, function (err) {
    res.redirect("back");
  });
});
```

### Error handling

If you want Dropzone to display any error encountered on the server, all you have to do, is send back a proper HTTP status code in the range of 400 - 500.
