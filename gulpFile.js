// npm i gulp gulp-rename gulp-terser -D

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    terser = require("gulp-terser");

function minifyJS() {
  return gulp.src("./PhoneMaskInputRus.js")
    .pipe(rename("PhoneMaskInputRus.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("./"));
}

exports.default = gulp.parallel(minifyJS);