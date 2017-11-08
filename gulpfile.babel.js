import autoprefix from "gulp-autoprefixer";
import gulp from "gulp";
import bourbon from "bourbon";
import neat from "bourbon-neat";
import sass from "gulp-sass";


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
