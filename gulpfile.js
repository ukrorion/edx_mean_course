var gulp = require('gulp');
var mocha = require('gulp-mocha');
var Server = require('karma').Server;
var nodemon = require('gulp-nodemon');


var path = {
  scripts: ['./config/**/*.js', './controllers/**/*.js', './helpers/**/*.js',
            './models/**/*.js', './lib/**/*.js', './db/**/*.js', './views/**/*.js', './spec/**/*.js', './middleware/**/*.js']
};

var errors = [];
var show_errors = function(errs){
  errs.forEach(function(error,index) {
    console.error(index+1 + ') ' + error);
    console.log('\n-------------------------------------------------------------------------\n');
  })
};

gulp.task('watch', function () {
  gulp.watch(path.scripts, ['run_all_tests']);
});

gulp.task('run_all_tests', function(){
  var error = false;
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(err){
      errors.push(err);
    }).
    on('end',function(){
      if(errors.length > 0) {
        show_errors(errors);
        errors = [];
      }
    });
});

gulp.task('tdd_karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, function(){
    done();
  }).start();
});

gulp.task('start_server', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html jade css json'
  }).on('restart', function () {
    console.log('\nServer restarted!\n')
  })
})

// Tasks for Travis CI
var build_faild = false;
gulp.task('run_karma_tests', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(exitCode){
    if(exitCode)
      build_faild = true;
    done();
  }).start();
});

gulp.task('all_tests', ['run_karma_tests'], function(done){
  gulp.
    src('./spec/**/*.js').
    pipe(mocha()).
    on('error',function(error){
      errors.push(error);
      build_faild = true;
    })
    .on('end', function () {
      if(errors.length > 0) {
        show_errors(errors);
        errors = [];
      }
      done(build_faild);
    });
});

gulp.task('default', ['all_tests']);
