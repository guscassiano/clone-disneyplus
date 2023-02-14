const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init()) 
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'))
}

function scripts () {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function images() {
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, scripts, images);
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.series(styles))
    gulp.watch('./src/scripts/*.js', gulp.series(scripts))
}