(function (module) {
  'use strict';

  var modRewrite = require('connect-modrewrite');

  module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      confs: {
        site: __dirname,
        frontEndServerPort: 8000
      },
      jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        gruntfile: {
          src: 'Gruntfile.js'
        },
        lib: {
          src: [
            '<%= confs.site %>/assets/**/*.js'
          ]
        }
      },
      connect: {
        feServer: {
          options: {
            port: '<%= confs.frontEndServerPort %>',
            base: '<%= confs.site %>',
            keepalive: true,
            middleware: function (connect, options) {
              var middlewares = [];
              var directory = options.directory || options.base[options.base.length - 1];

              // enable Angular's HTML5 mode
              middlewares.push(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.gif$ /index.html [L]']));

              if (!Array.isArray(options.base)) {
                options.base = [options.base];
              }
              options.base.forEach(function(base) {
                // Serve static files.
                middlewares.push(connect.static(base));
              });

              // Make directory browse-able.
              middlewares.push(connect.directory(directory));

              return middlewares;
            }
          }
        }
      },
      concurrent: {
        dev: {
          tasks: [
            'connect:feServer',
            'watch:feDev'
          ],
          options: {
            limit: '<%= concurrent.dev.tasks.length %>',
            logConcurrentOutput: true
          }
        }
      },
      watch: {
        feDev: {
          files: [
            '<%= confs.site %>/assets/**/*.js'
          ],
          tasks: [
            'jshint'
          ],
          options: {
            spawn: false
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
      'jshint',
      'concurrent:dev'
    ]);
  };
})(module);
