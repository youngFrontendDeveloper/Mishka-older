// "use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/libs/*.js",
      "source/*.ico",
      "source/video/*.*"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("sprite", function () {
  return gulp.src("source/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("./*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("source/img"));
});

// Файлы для подключения в строгом порядке:

let jsFiles = [  
  "./source/js/main.js"   
];

// Task на скрипты JS 
gulp.task("script", function () {
  return gulp.src(jsFiles)
  .pipe(sourcemap.init()) // инициализируем создание Source Maps
  .pipe(concat("script.js"))  // Объединение файлов в один
  .pipe(gulp.dest("./source/js")) 
  .pipe(uglify({
    toplevel: true
  }))
  .pipe(sourcemap.write(".")) // пути для записи SourceMaps - в данном случае карта SourceMaps будет добавлена прям в данный файл scripts.min.js в самом конце в формате комментария
  .pipe(gulp.dest("./build/js"))
  .pipe(server.stream());
});


gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });


  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/js/**/*.js", gulp.series("script"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("./*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("clean", "copy", "css", "script", "images", "webp", "sprite", "html"));
gulp.task("default", gulp.series("build", "server"));
