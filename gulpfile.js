var gulp = require('gulp'),
    markdown = require('gulp-markdown'),
    gulpif = require('gulp-if'),
    concat = require('gulp-concat');

gulp.task('default', function () {
	return gulp.src(['parts/header.html', 'input/articles/*.md', 'parts/footer.html'])
		.pipe(gulpif(/[.]md$/, markdown()))
		.pipe(concat('book.html'))
		.pipe(gulp.dest('output'));
});
