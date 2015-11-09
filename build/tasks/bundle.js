var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
  force: true,
  packagePath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '[*]',
        '*.html!text',
        '*.css!text',
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/requirements": {
      includes: [
      ],
      options: {
        inject: true,
        minify: true
        /*
         * Add bundle file revision/version.
         * rev: true
        */
      }
    }
  }
};

gulp.task('bundle', function() {
 return bundler.bundle(config);
});

gulp.task('unbundle', function() {
 return bundler.unbundle(config);
});
