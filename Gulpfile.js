var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    prefix        = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),
    autowatch     = require('gulp-autowatch'),
    plumber       = require('gulp-plumber'),
    uglify        = require('gulp-uglify'),
    srcFolder = 'app',
    dstFolder = 'dist',
    normalize = require('normalize'),
    prettifyHtml = require('gulp-html-prettify');


// HTML

gulp.task('htmls', function () {
  gulp.src(srcFolder + '/*.html')
    .pipe(prettifyHtml({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest(dstFolder))
    .pipe(connect.reload());
});


gulp.task('styles', function() {
  return gulp.src([srcFolder + '/styles/main.scss'])
    .pipe(plumber())
    // .pipe(concat('base.scss'))
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest(dstFolder + '/styles'))
    .pipe(connect.reload());
});

// gulp.task('styles', function() {
//   return gulp.src('scss/*.scss')
//     .pipe(plumber())
//     .pipe(concat('style.scss'))
//     .pipe(less())
//     .pipe(prefix(["last 5 version", "ie 9"]))
//     .pipe(minifyCSS({keepBreaks: true}))
//     .pipe(gulp.dest('css'))
//     .pipe(connect.reload());
// });

// JS


gulp.task('scripts', function() {
  return gulp.src(srcFolder + 'js/**/*')
    // .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dstFolder + '/js'))
    .pipe(plumber())
    .pipe(connect.reload());
});

// gulp.task('scripts', function() {
//   return gulp.src('src/js/*.js')
//     .pipe(plumber())
//     // .pipe(uglify())
//     .pipe(gulp.dest('widget'))
//     .pipe(connect.reload());
// });

// WATCH

var paths = {
  htmls:          srcFolder +'/*.html',
  // scripts:         srcFolder + 'js/**/*',
  // 'base-styles':  'scss/base/*.scss',
  // scripts: 'js/*js',
  styles:  srcFolder + '/styles/*.scss'
};

gulp.task('watch', function(cb) {
  autowatch(gulp, paths);
  return cb();
});

// LIVERELOAD 

gulp.task('connect', function() {
  connect.server({
    port: '3005',
    livereload: true
  });
});

// DEFAULT

gulp.task('default',  [
  'connect',
  'htmls',
  'styles',
  // 'watch',
  'scripts'
  ]);