module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
    dist: {
      options: {
        sassDir: 'sass',
        cssDir: 'css',
        environment: 'production'
      }
    },
    dev: {
      options: {
        sassDir: 'sass',
        cssDir: 'css'
      }
    }
  },

    watch: {
        sass:{
            files: ['sass/*.scss'],
            tasks: ['sass', 'cssmin']
        }
    },

    sass: {
        dist: {
            options: {
                compass: true,
            },
            files: {
                'css/style.css' : 'sass/style.scss'
            }
        }
    },
  });
     // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

     // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
};
