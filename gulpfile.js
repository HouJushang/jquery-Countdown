/**
 * Created by Laggo on 15/11/19.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('script', function () {
    return gulp.src('jquery.countdown.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
})