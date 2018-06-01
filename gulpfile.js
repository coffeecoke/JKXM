var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({rename: {'gulp-rev-append': 'rev'}});

var pkg = require('./package.json');

var AUTOPREFIXER_BROWSERS = ["Android >= 4", "Explorer >= 10", "iOS >= 6"];

//注释信息
var banner = '/*! <%= pkg.title %> v<%= pkg.version %> by YDCSS (c) ' +
    $.util.date(Date.now(), 'UTC:yyyy') + ' Licensed <%= pkg.license %>' + ' */ \n';

//编译bootstrap
gulp.task('bootstrap', function () {
    gulp.src(['bootstrap/less/bootstrap.less'])
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS, cascade: false
        }))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('bootstrap/css'))
        .pipe($.livereload());
});

//编译AdminLET  less的编译
gulp.task('main-less', function () {
    gulp.src(['base-less/main.less'])
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS, cascade: false
        }))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/base-css'))
        .pipe($.livereload());
});


var componentsOptions = [

    //components
    {
        "name" : "bridge-chart",
        "cssPretreatment" : "less",
        "src" : ["components/bridge-chart/styles/bridge-chart.less"],
        "target" : "components/bridge-chart/styles"
    },
    //pages

    {
        "name" : "page",
        "cssPretreatment" : "less",
        "src" : ["pages/**/*.less"],
        "target" : "pages"
    },
    {
        "name" : "main",
        "cssPretreatment" : "less",
        "src" : ["components/main/main.less"],
        "target" : "components/main"
    }


]

//components组件预处理器编译,并放入目标文件夹中

gulp.task('components',function(){
    for(var i=0;i<componentsOptions.length;i++){
        var cssPretreatment = componentsOptions[i].cssPretreatment
        if(cssPretreatment=="less"||!cssPretreatment){
            gulp.src(componentsOptions[i].src)
                .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
                .pipe($.sourcemaps.init()) //生成css对应less的映射文件，方便调试
                .pipe($.less()) 
                .pipe($.autoprefixer({
                    browsers: AUTOPREFIXER_BROWSERS, cascade: false
                }))
                .pipe($.sourcemaps.write('./'))
                .pipe(gulp.dest(componentsOptions[i].target))
                .pipe($.livereload());
        }else if (cssPretreatment=="sass"){

            gulp.src(componentsOptions[i].src)
                .pipe($.sass())
                .pipe(gulp.dest(componentsOptions[i].target))
        }

    }
});


//gulp.task('concat', function () {
//    gulp.src(['src/js/source/ydui.js', 'src/js/source/**/*.js'])
//        .pipe($.concat('ydui.js'))
//        .pipe(gulp.dest('src/js'));
//});

//gulp.task('copeJs',function(){
//    gulp.src('src/js/jquery-2.1.4.min.js')
//        .pipe(gulp.dest('dist/demo/js'))
//        .pipe(gulp.dest('dist/build/js'))
//})

////gulp.task('copeIconfont',function(){
//    gulp.src('src/iconfont/**')
//        .pipe(gulp.dest('dist/demo/iconfont'))
//        .pipe(gulp.dest('dist/build/iconfont'))
//});

//监控bootstrap

gulp.task('watchBootstrap', function (done) {
    $.livereload.listen();
    gulp.watch('bootstrap/**/*.less', ['bootstrap'])
        .on('end',done);
});

//监控组件的less变化
gulp.task('watchComponents-less', function (done) {
    $.livereload.listen();
    gulp.watch('components/**/*.less', ['components'])
        .on('end',done);
});

//监控base-less的变化
gulp.task('watchBaseLess',function (done) {
    $.livereload.listen();
    gulp.watch('base-less/**/*.less', ['main-less'])
        .on('end',done);
})


gulp.task('build:cssmin', ['main-less'], function () {
   gulp.src('dist/css/main.css')
       .pipe($.cleanCss({keepSpecialComments: '*'}))
       .pipe($.header(banner, {pkg: pkg}))
       .pipe($.rename({     //重命名
           suffix: '.min'
       }))
       .pipe(gulp.dest('dist/css'));
});

//gulp.task('build:uglify', function () {
//    gulp.src(['src/js/{ydui.js,ydui.flexible.js}'])
//        .pipe($.uglify())
//        .pipe($.header(banner, {pkg: pkg}))
//        .pipe(gulp.dest('dist/build/js'));
//});

//gulp.task('demo:yoa_css', function () {
//    gulp.src(['src/less/{ydui,demo}.less']).pipe($.sourcemaps.init())
//        .pipe($.less())
//        //.pipe($.cssBase64({
//        //    extensionsAllowed: ['.ttf']
//        //}))
//        .pipe($.autoprefixer({
//            browsers: AUTOPREFIXER_BROWSERS, cascade: false, remove: true
//        }))
//        .pipe($.sourcemaps.write('./'))
//        .pipe(gulp.dest('dist/demo/yoa_css'))
//        .pipe(gulp.dest('src/yoa_css'));
//});

//gulp.task('demo:html', function () {
//    gulp.src(['src/html/**/*.html', 'src/index.html', 'src/libs/**/*.html'], {base: 'src'})
//        .pipe($.rev())
//        .pipe(gulp.dest('dist/demo'));
//});
//
//gulp.task('demo:uglify', function () {
//    gulp.src(['src/js/{ydui.js,ydui.flexible.js}'])
//        .pipe(gulp.dest('dist/demo/js'));
//});

gulp.task('dev', ['bootstrap','main-less','components','watchBootstrap','watchBaseLess','watchComponents-less']);

//gulp.task('demo', ['demo:yoa_css', 'copeIconfont','copeJs','demo:uglify', 'demo:html']);

gulp.task('default', ['dev']);
