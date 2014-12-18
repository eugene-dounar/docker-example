var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  less: './less/**/*.less'
};
gulp.task('less', function() {
  gulp.src('less/main.less')
    .pipe(less())
    .on('error', swallowError)
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./web/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});

function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}
