var gulp = require('gulp');
var mocha = require('gulp-mocha');
var Server = require('karma').Server;

var path = {
  scripts: ['./config/**/*.js', './controllers/**/*.js', './helpers/**/*.js',
            './models/**/*.js', './lib/**/*.js', './db/**/*.js', './views/**/*.js',
            './spec/**/*.js']
};

gulp.task('watch', function () {
  gulp.watch(path.scripts, ['run_all_tests']);
});

gulp.task('run_all_tests', function(){
  var error = false;
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(){
      this.emit(end);
      error = true;
    });
});

gulp.task('all_tests', ['run_karma_tests'], function(){
  var error = false;
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(){
      error = true;
    })
    .on('end', function () {
      if (error){ process.exit(1); }
      process.exit();
    });
});

gulp.task('run_karma_tests', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(){
    done();
  }).start();
});

gulp.task('tdd_karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, function(){
    done();
  }).start();
});

gulp.task('default', ['all_tests']);
