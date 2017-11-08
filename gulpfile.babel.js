import autoprefix from "gulp-autoprefixer";
import gulp from "gulp";
import bourbon from "node-bourbon";
import neat from "node-neat";
import sass from "gulp-sass";

console.log(neat);

const paths = {
  scss: './public/sass/**/*.scss'
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


gulp.task('default', () => {
  gulp.watch('./public/sass/**/*.scss',['sass']);
});
