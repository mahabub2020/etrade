const {src, dest, series, watch} = require('gulp');
const rename = require('gulp-rename');

// Webfonts
/*function webfonts() {
    return src('./assets/src/vendors/fontawesome/webfonts/!*')
        .pipe(dest('./assets/webfonts/'));
}*/


// Fonts
function vendorcss() {
    return src('./src/css/vendor/*.css')
    .pipe(concat('vendor.min.css'))
    .pipe(dest('./assets/'))

}

// Fonts
function vendorjs() {
    return src('./src/js/vendor/*.js')
    .pipe(concat('vendor.min.js'))
    .pipe(dest('./assets/'))

}
// Fonts
function vendorJqjs() {
    return src('./src/jquery.js')
    .pipe(dest('./assets/'))

}

// Fonts
function fonts() {
    return src('./src/fonts/*')
        .pipe(dest('./assets/'));
}

// Styles
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function mainstyles() {
    return src('./src/scss/style.scss')
        .pipe(scss())
        .pipe(autoPrefixer('last 2 versions'))
       // .pipe(cssMinify())
        .pipe(dest('./assets/'))
}

// Scripts
const concat = require('gulp-concat');
const jsMinify = require('gulp-terser');

function mainscripts() {
    return src([ 
        './src/js/main.js'])
        //.pipe(jsMinify()) 
        .pipe(dest('./assets/'))
}

function watchTask() {
    watch(
        [
            './src/scss/**/*.scss',
           
        ],
        series(fonts, mainstyles, mainscripts)
    )
}

exports.default = series(vendorcss, vendorjs, vendorJqjs, watchTask);