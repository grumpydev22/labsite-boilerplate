"use strict";
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var styledown = require('gulp-styledown');
var fs = require('fs');
var inject = require('gulp-inject');
var prettify = require('gulp-prettify');

var config = require('../config');
var handleError = require('../utils/handle-error');

gulp.task('styleguide--compile', function() {
  return gulp.src(config.paths.styles.dist + config.outputFiles.styles.main)
    .pipe(plumber({
      errorHandler: handleError
    }))
    .pipe(styledown({
      filename: config.inputFiles.styleguide.outputFile,
      head: '',
      body: 'main#styleguide.sg-main(sg-content)',
      indentSize: 2,
      template: fs.readFileSync(config.basePaths.dist + config.inputFiles.styleguide.outputFile, 'utf8')
    }))
    .pipe(gulp.dest(config.basePaths.dist));
});
