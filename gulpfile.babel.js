import autoprefix from "gulp-autoprefixer";
import gulp from "gulp";
import gutil from "gulp-util";
import bourbon from "node-bourbon";
import neat from "node-neat";
import sass from "gulp-sass";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "./webpack.config";

const paths = {
  scss: './public/sass/**/main.scss'
}
gulp.task('sass', () => {
  return gulp.src(paths.scss)
      .pipe(sass({
        sourcemaps: true,
        includePaths: [bourbon.includePaths, neat.includePaths]
      }).on('error', sass.logError))
      .pipe(autoprefix("last 2 versions"))
      .pipe(gulp.dest('./public/css/'))
});
gulp.task("watch-sass", () => {
  gulp.watch('./public/sass/**/*.scss',['sass']);
});

gulp.task('webpack-dev-server', function (c) {
  var myConfig = Object.create(webpackConfig);

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
      stats: {
        colors: true
      }
  }).listen(myConfig.devServer.port, 'localhost', function (err) {
      if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }
      gutil.log('[webpack-dev-server]', 'http://localhost:3333/index.html');
  });
});

gulp.task('default',['webpack-dev-server', "sass", "watch-sass"]);
