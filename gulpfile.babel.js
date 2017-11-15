import autoprefix from "gulp-autoprefixer";
import gulp from "gulp";
import gutil from "gulp-util";
import imagemin from "gulp-imagemin";
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
    .pipe(gulp.dest('./dist'))
});

//bundle js to dist folder
gulp.task("webpack", () => {
  gulp.src('./app/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist'));
});

gulp.task("optimize-images", () => {
  gulp.src('public/assets/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets'))
})

gulp.task("watch", ()=> {
  gulp.watch("./app/index.js", ['webpack']);
  gulp.watch('./public/sass/**/*.scss',['sass']);
});

//webpack Server
gulp.task('webpack-dev-server', () => {
  let myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(myConfig.devServer.port, 'localhost', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', `http://localhost:${myConfig.devServer.port}/index.html`);
  });
});

gulp.task('default',['webpack-dev-server', "watch", "optimize-images"]);
