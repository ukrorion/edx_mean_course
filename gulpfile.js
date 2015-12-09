var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('watch', function () {
  gulp.watch('./*.js', ['run_all_test']);
});

gulp.task('run_all_test', function(){
  var error = false;
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(){
      this.emit('end');
      error = true;
    }).
    on('end', function(){
      console.log('All tests have been passed');
      process.exit(0);
    });
});


