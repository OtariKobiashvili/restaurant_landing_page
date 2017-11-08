import autoprefix from "gulp-autoprefixer";
import gulp from "gulp";
import gutil from "gulp-util";
import bourbon from "node-bourbon";
import neat from "node-neat";
import sass from "gulp-sass";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackStream from "webpack-stream";
import webpackConfig from "./webpack.config";

const paths = {
  scss: './public/sass/**/main.scss'
}

//repurpose sass in to css in public/css folder
gulp.task('sass', () => {
  return gulp.src(paths.scss)
    .pipe(sass({
      sourcemaps: true,
      includePaths: [bourbon.includePaths, neat.includePaths]
    }).on('error', sass.logError))
    .pipe(autoprefix("last 2 versions"))
    .pipe(gulp.dest('./public/css/'))
});

//watch for sass changes, then do sass task
gulp.task("watch-sass", () => {
  gulp.watch('./public/sass/**/*.scss',['sass']);
});

//bundle js to dist folder
gulp.task("webpack", () => {
  gulp.src('./app/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist'));
});

//watch for js changes in app/index.js then do webpack task
gulp.task("watch-app", ()=> {
  gulp.watch("./app/index.js", ["webpack"])
});

//webpack Server
gulp.task('webpack-dev-server', (c) => {
  let myConfig = Object.create(webpackConfig);

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
      stats: {
        colors: true
      }
  }).listen(myConfig.devServer.port, 'localhost', function (err) {
      if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }
      gutil.log('[webpack-dev-server]', `http://localhost:${myConfig.devServer.port}/index.html`);
  });
});

gulp.task('default',["watch-app", 'webpack-dev-server', "watch-sass"]);
