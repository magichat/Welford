'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', () => {
  return gulp.src('dev/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('prod/css'));
});

var htmlmin = require('gulp-htmlmin');

gulp.task('html', () => {
  return gulp.src('dev/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('prod'));
});

var imagemin = require('gulp-imagemin');
 
gulp.task('imgmin', () =>
    gulp.src('dev/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('prod/img'))
);
 
gulp.task('watch', function () {
  gulp.watch('dev/*.html', gulp.series('html'));
  gulp.watch('dev/scss/', gulp.series('sass'));
});