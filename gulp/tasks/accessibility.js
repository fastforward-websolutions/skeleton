'use strict';

module.exports = function (gulp, $, config) {

  var srcFiles = config.paths.pages.dest + '**/*.html';
  console.log('srcFiles', srcFiles);
  return function () {
    return gulp.src(srcFiles)
      .pipe($.a11y())
      .pipe($.a11y.reporter())
      .pipe($.accessibility({
        reportLevels: {
          notice: false
        }
      }));
  };
};
