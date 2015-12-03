var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  gulp.
    src('./spec/test.js').
    pipe(mocha()).
    on('error', function (err) {
      this.emit('end');
    });
});

gulp.task('watch', function () {
  gulp.watch('./*.js', ['test']);
});

gulp.task('run_all_test', function(){
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(){
      this.emit('end');
    });
});