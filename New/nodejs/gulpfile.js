var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){ //разовое выполнение функции
	gulp.src('./Project/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./Project'));
});

gulp.task('sass:watch', function(){ //отслеживание изменений в файлах
	gulp.watch('./Project/**/*.scss', ['sass']);
});