'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('optimiseImages', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest('dist/images'))
);
