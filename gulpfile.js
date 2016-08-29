var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['compile', 'min']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['compile', 'min']);
})

gulp.task('compile', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('min', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
