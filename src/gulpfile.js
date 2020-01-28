import { src, gulp } from 'gulp'

export const js = () => {
    gulp.task('ts', () => {
        return gulp.src('client/javascript/*.js', { sourcemaps: true });
    });
}




