var gulp = require('gulp');
var paths = require('../paths');
var watch = require('gulp-watch');
var jadeMarko = require('jade-marko');
var globalData = require('../../data')

// custom jade compilation to Marko
gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(jade({globals: globalData}))
    .pipe(gulp.dest('./apps'))
});

gulp.task('jade:watch', function () {
  gulp.watch(paths.jade, ['jade:marko']);
});
