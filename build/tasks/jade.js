var gulp = require('gulp');
var paths = require('../paths');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var data = require('gulp-data');
var print = require('gulp-print');
var debug = require('gulp-debug');
var util = require('util');

console.log('Compiling Jade templates:' + paths.jade);

jadeTestOpts = {
  // debug: true,
  filename: './test/',
  pretty: true
}

// Jade compilation
// See https://github.com/phated/gulp-jade
gulp.task('jade:test', function() {
  gulp.src('test/*.jade')
    .pipe(print())
    .pipe(debug({title: 'JADE'}))
    .pipe(data(function(file) {
        var data = require('../../data');
        console.log(JSON.stringify(data, null, 2));
        return data;
    }))
    // needs filename as "root" for relative extend to work (ie template inheritance)
    // See https://github.com/viniwrubleski/grunt-jade-php/issues/2
    .pipe(jade())
    .pipe(gulp.dest('./test'))
});

var jadeOpts = {
  // debug: true,
  filename: './templates/',
  pretty: true
}

// Jade compilation
// See https://github.com/phated/gulp-jade
gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(print())
    // .pipe(debug({title: 'JADE'}))
    .pipe(data(function(file) {
        var data = require('../../data');
        // console.log(JSON.stringify(data, null, 2));
        return data;
    }))
    // needs filename as "root" for relative extend to work (ie template inheritance)
    // See https://github.com/viniwrubleski/grunt-jade-php/issues/2
    .pipe(jade(jadeOpts))
    .pipe(gulp.dest(paths.output))
});

gulp.task('jade:watch', function () {
  gulp.watch(paths.jade, ['jade']);
});
