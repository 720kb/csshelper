(function (module) {
  'use strict';

  module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      csslint: {
        options: {
          csslintrc: '.csslintrc'
        },
        strict: {
          src: ['src/**/*.css']
        }
      },
      cssmin: {
        options: {
          banner: '/* CSS Helper \r\n http://720kb.github.io/csshelper */'
        },
        minify: {
          expand: true,
          cwd: 'src',
          src: ['helper.css'],
          dest: 'dist/',
          ext: '.min.css'
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
      'csslint',
      'cssmin'
    ]);
  };
})(module);
