var gulp = require('gulp');
var paths = require('../paths');
var eslint = require('gulp-tslint');

// runs eslint on all .js files
gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.report('verbose', {
      emitError: false
    }));
});
