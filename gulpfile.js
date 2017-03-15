var gulp=require('gulp');
var sass = require('gulp-sass'); //sass
var autoprefixer = require('gulp-autoprefixer');//前缀文件
var cssmin = require('gulp-minify-css');//css压缩
var uglify = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat');//文件合并
var rename = require('gulp-rename');//文件更名
var notify = require('gulp-notify');//提示信息


gulp.task('tocss', function () {
	//编译所有scss文件
    return gulp.src('./sass/**.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./skin/'));

});


gulp.task('default', function () {
  	gulp.watch('./sass/**.scss', ['tocss']);
});