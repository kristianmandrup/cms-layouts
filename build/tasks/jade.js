var gulp = require('gulp');
var paths = require('../paths');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var data = require('gulp-data');
var print = require('gulp-print');

console.log('Compiling Jade templates:' + paths.jade);

// Jade compilation
// See https://github.com/phated/gulp-jade
gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(data(function(file) {
        var data = require('../../data')
        console.log('data:' + data);
        return data;
    }))
    .pipe(jade())
    .pipe(print())
    .pipe(gulp.dest(paths.output))
});

gulp.task('jade:watch', function () {
  gulp.watch(paths.jade, ['jade']);
});
