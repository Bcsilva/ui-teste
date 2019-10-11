var 
gulp = require('gulp'),
gutil = require('gulp-util'),
jshint     = require('gulp-jshint'),
sass = require('gulp-sass'),
cssnano = require('gulp-cssnano'),
sourcemaps = require('gulp-sourcemaps'),
concat = require('gulp-concat'),
autoprefixer = require('gulp-autoprefixer'),
pug = require('gulp-pug'),
image = require('gulp-image'),
uglify = require('gulp-uglify'),
serve = require('gulp-serve'),
browserSync = require('browser-sync').create(),
reload      = browserSync.reload,
input  = {
    'sass': 'src/assets/styles/internal/**/*.scss',
    'vendorcss': 'src/assets/styles/vendor/**/*.scss',
    'js': 'src/assets/js/internal/**/*.js',
    'vendorjs': 'src/assets/js/vendor/**/*.js',
    'pug': 'src/**/*.pug',
    'img': 'src/assets/img/**/*'
},
output = {
    'css': 'dist/styles',
    'js': 'dist/js',
    'pug': './dist',
    'img': './dist/img'
};

/* run javascript through jshint */
gulp.task('jshint', done => {
    return gulp.src(input.js)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
      done();
  });

/* concat javascript files, minify if --type production */
gulp.task('build-js', done => {
    return gulp.src(input.js)
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(output.js));
      done();
  });

/* concat javascript files, minify if --type production */
gulp.task('build-vendor-js', done => {
    return gulp.src(input.vendorjs)
      .pipe(sourcemaps.init())
      .pipe(concat('vendor.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(uglify()) 
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(output.js));
      done();
  });

/*render the pug/pug to actual html */
gulp.task('pug', done => {
    return gulp
    .src(input.pug)
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(output.pug));
    done();
});

/*concat n optimize css */
gulp.task('build-css', done => {
    return gulp.src(input.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(output.css))
    done();
});
/*concat n optimize css */
gulp.task('build-vendor-css', done => {
    return gulp.src(input.vendorcss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
    .pipe(cssnano())
    .pipe(concat('vendor.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(output.css))
    done();
});

/*img treatment */
gulp.task('image', done => {
    return gulp.src(input.img)
      .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        guetzli: false,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true // defaults to false
      }))
      .pipe(gulp.dest(output.img));
      done();
});

/*watch task */
gulp.task('watch', done => {
    gulp.watch(input.js, gulp.series('jshint', 'build-vendor-js'));
    gulp.watch(input.js, gulp.series('jshint', 'build-js'));
    gulp.watch(input.sass, gulp.series('build-vendor-css'));
    gulp.watch(input.sass, gulp.series('build-css'));
    gulp.watch(input.img, gulp.series('image'));
    gulp.watch(input.pug, gulp.series('pug'));
    done();
});

/*compile them all */
gulp.task('compile', gulp.series('build-vendor-js','build-js','build-vendor-css','build-css','image','pug'));


gulp.task('default', gulp.series('watch'));

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("*.pug").on("change", reload);
    gulp.watch("*.html").on("change", reload);
});