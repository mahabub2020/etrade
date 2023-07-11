const {src, dest, series, watch} = require('gulp');
const rename = require('gulp-rename');

// Webfonts
/*function webfonts() {
    return src('./assets/src/vendors/fontawesome/webfonts/!*')
        .pipe(dest('./assets/webfonts/'));
}*/

// Fonts
function fonts() {
    return src('./assets/src/fonts/*')
        .pipe(dest('./assets/fonts/'));
}

// Styles
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./assets/src/scss/**/*.scss')
        .pipe(scss())
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(cssMinify())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./assets/css/'))
}

// Scripts
const concat = require('gulp-concat');
const jsMinify = require('gulp-terser');

function scripts() {
    return src([
        './assets/src/vendors/bootstrap/dist/js/bootstrap.bundle.js',
        './assets/src/vendors/jquery-modal-video/jquery-modal-video.min.js',
        './assets/src/vendors/isotop/isotope.pkgd.min.js',
        './assets/src/vendors/slick/slick.min.js',
        './assets/src/js/**/*.js'])
        .pipe(jsMinify())
        .pipe(concat('ncc.min.js'))
        .pipe(dest('./assets/js/'))
}

function watchTask() {
    watch(
        [
            './assets/src/scss/**/*.scss',
            './assets/src/js/**/*.js'
        ],
        series(fonts, styles, scripts)
    )
}

exports.default = series(fonts, styles, scripts, watchTask);