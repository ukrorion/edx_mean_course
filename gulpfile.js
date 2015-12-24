var gulp = require('gulp');
var mocha = require('gulp-mocha');

var path = {
  scripts: ['./config/**/*.js', './controllers/**/*.js', './helpers/**/*.js']
}

gulp.task('watch', function () {
  gulp.watch(path.scripts, ['run_all_test']);
});

gulp.task('run_all_test', function(){
  var error = false;
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(){
      this.emit('end');
      error = true;
    });
});


