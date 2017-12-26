var gulp = require('gulp');

gulp.task('copy', (done) => {
  gulp.src('index.html')
    .pipe(gulp.dest('dist'));    
  done();
});

gulp.task('server', () => {
  var server = require('./server.js')
});

gulp.task('deploy', ['copy', 'server'])
