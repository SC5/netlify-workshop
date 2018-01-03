const gulp = require('gulp');
const gp = require('gulp-load-plugins')();

const DEST_DIR = 'build';

gulp.task('default', [
    'build'
]);

gulp.task('build', [
    'copy',
    'css'
]);

gulp.task('watch', function() {
    return gulp.watch(['src/**/*'], ['build']);
})

gulp.task('css', () => {
    return gulp.src('src/main.scss')
        .pipe(gp.sass())
        .pipe(gulp.dest(DEST_DIR));
});

gulp.task('copy', () => {
    return gulp.src([
        'src/**/*.html',
        'src/main.js',
        'src/_redirects'
    ])
    .pipe(gulp.dest(DEST_DIR));
});

gulp.task('clean', () => {
    return gulp.src(DEST_DIR, {read: false})
        .pipe(gp.clean());
}); 