const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine-phantom');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpUtil = require('gulp-util');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['copy-html', 'copy-images', 'style', 'lint', 'script'], function() {
	gulp.watch('./scss/**/*.scss', ['style']);
        gulp.watch('./js/**/*.js',['lint']);
	gulp.watch('./index.html',['copy-html']);
	gulp.watch('./index.html').on('change', browserSync.reload({stream: true }));
	browserSync.init({
		server: "./dist"
	});
	
	browserSync.stream();
});

gulp.task('dist', [
	'copy-html',
	'copy-images',
	'style',
	'lint',
	'script-dist'
]);

gulp.task('script', function() {
	gulp.src('js/**/*.js')
	.pipe(babel())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('script-dist', function() {
	gulp.src('js/**/*.js') 
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat('all.js'))
	.pipe(uglify().on('error', gulpUtil.log)) 
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js'));	
});

gulp.task('copy-html', function() {
	gulp.src('./index.html')
       	.pipe(gulp.dest('./dist'));
});

gulp.task('copy-images', function() {
	gulp.src('img/*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('style', function() {
       	gulp.src('./scss/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
		}
	))	
	.pipe(gulp.dest('./dist/css'))
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
