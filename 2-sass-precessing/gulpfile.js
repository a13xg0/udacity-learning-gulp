const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('style', function() {
	gulp.src('./scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});
