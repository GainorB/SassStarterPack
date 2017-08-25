const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// COMPILE SASS
gulp.task('sass', function() {
  // look in this location for .scss files
  return (gulp
      .src(['src/scss/*.scss'])
      .pipe(sass())
      // destination
      // compile it into this location
      .pipe(gulp.dest('src/css'))
      // stream to browser
      .pipe(browserSync.stream()) );
});

// Watch & Serve

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    // folder we serve to the browser, where the index.html is
    server: './src'
  });

  // constantly watch sass files
  gulp.watch(['src/scss/*.scss'], ['sass']);
  // constantly watch html files
  gulp.watch(['./src/*.html']).on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['serve']);
