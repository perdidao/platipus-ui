module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev', 'cssmin:dev'],
        options: { livereload: true },
      },
      static: {
        files: ['*.html', '**/*.html'],
        options: { livereload: true },
      },
    },
    sass: {
      dev: {
        files: {
          'static/css/platypus-ui.min.css': 'src/main.scss',
        },
      },
      dist: {
        files: {
          'dist/platypus-ui.min.css': 'src/main.scss',
        },
      },
    },
    autoprefixer: {
      dev: {
        src: 'static/css/platypus-ui.min.css',
      },
      dist: {
        src: 'dist/platypus-ui.min.css',
      },
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      dev: {
        files: {
          'static/css/platypus-ui.min.css': 'static/css/platypus-ui.min.css'
        }
      },
      dist: {
        files: {
          'dist/platypus-ui.min.css': 'static/css/platypus-ui.min.css'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: './',
        },
      },
    },
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask('dev', ['sass:dev', 'autoprefixer:dev', 'cssmin:dev', 'connect', 'watch'])
  grunt.registerTask('build', ['sass:dist', 'autoprefixer:dist', 'cssmin:dist'])
}
