var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var watch = require('gulp-watch');

gulp.task('jasmine', function() {
    return gulp.src('spec/bundle.js')
        .pipe(watch('spec/bundle.js'))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});
