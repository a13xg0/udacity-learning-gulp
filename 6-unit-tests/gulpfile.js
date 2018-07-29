const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');

const jasmine = require('gulp-jasmine-phantom');

gulp.task('default', function() {
	gulp.watch('./scss/**/*.scss', ['style']);
        gulp.watch('./js/**/*.js',['lint']);
	browserSync.init({
		server: "./"
	});
	
	browserSync.stream();
});

gulp.task('style', function() {
	gulp.src('./scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
		}
	))	
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('lint', function() {
	gulp.src('js/**/*.js')
	.pipe(eslint())
	.pipe(eslint.format());
//	.pipe(eslint.failOnError());
});

gulp.task('test', function() {
	gulp.src('js/**/*.spec.js')
	.pipe(jasmine());
});
