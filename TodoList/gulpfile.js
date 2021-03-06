var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var eslint = require('gulp-eslint');

var CssFolder = './assets/css';
var JsFolder = './assets/js';
var inputCss = CssFolder + '/**/*.scss';
var inputJs = JsFolder + '/**/*.js';
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded',
};

gulp.task('sass', function() {
	return gulp
		.src(CssFolder + '/styles.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(CssFolder))
		.pipe(sassdoc())
		.resume();
});

gulp.task('lint', function() {
	return (gulp
			.src(JsFolder + 'app.js')
			.pipe(
				eslint({
					rules: {
						quotes: [1, 'single'],
						semi: [1, 'always'],
					},
				}),
			)
			.pipe(eslint.format())
			// Brick on failure to be super strict
			.pipe(eslint.failOnError()) );
});

gulp.task('watch', function() {
	gulp.watch(inputCss, ['sass']);
	gulp.watch(inputJs, ['lint']);
	gulp.on('change', function(event) {
		console.log(
			'File ' + event.path + ' was ' + event.type + ', running tasks...',
		);
	});
});

gulp.task('default', ['sass', 'lint', 'watch' /*, possible other tasks... */]);
