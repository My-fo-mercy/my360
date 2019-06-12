const gulp = require('gulp'); //引入gulp模块
const html = require('gulp-minify-html');
const css = require('gulp-minify-css');
const sass = require('gulp-sass');
const uglifyjs = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const es2015 = require('babel-preset-es2015');
const watch = require('gulp-watch');

//1.新建一个测试任务。
// gulp.task('default',function(){
//     console.log('hello,gulp');
// });


//2.复制文件
// gulp.task('copyfile',function(){
//     return gulp.src('src/*.html').pipe(gulp.dest('dist/'));
// });


//3.压缩html文件。
gulp.task('htmlfile', function() {
    return gulp.src('src/*.html') //引入文件
        .pipe(html()) //压缩
        .pipe(gulp.dest('dist/')) //输出
});


//4.压缩css文件。
gulp.task('cssfile', function() {
    return gulp.src('src/css/*.css') //引入文件
        .pipe(css()) //压缩
        .pipe(gulp.dest('dist/css/')); //输出
});


//4.编译sass
gulp.task('sassfile', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css/'));
});


//5.压缩js
gulp.task('jsfile', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglifyjs())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('dist/js/'));
});


//6.es6转es5
//三个插件：gulp-babel  babel-core   babel-preset-es2015
gulp.task("babeljs", function() {
    return gulp.src("src/js/es6.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist/js/"));
});


//7.图片的压缩--png
//如果插件安装不成功，可以在清除缓存之后继续按照 npm cache clean --force
gulp.task('runimg', function() {
    return gulp.src('img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});


//监听所有文件的变化--任务必须先跑一次。
//安装gulp-watch
gulp.task('default', function() {
    watch(['src/*.html', 'src/css/*.css', 'src/js/*.js'], gulp.parallel('htmlfile', 'cssfile', 'jsfile'));
    //watch的第一个参数监听的文件的路径，第二个参数是监听运行的任务名
    //gulp.parallel() –并行运行任务 
});

//新建一个任务:gulp.task(任务名,回调函数);
//加载文件的路径：gulp.src(路径)
//输出文件的路径：gulp.dest(路径)，路径不存在就创建。
//pipe():管道，流。