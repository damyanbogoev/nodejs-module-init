module.exports = function(grunt){
  
  grunt.initConfig({
    jshint: {
        files : ['lib/**/*.js', 'model/**/*.js', 'test/**/*.js'],
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    watch : {
        files : ['lib/**/*.js', 'model/**/*.js', 'test/**/*.js'],
        tasks : ['jshint', 'mocha']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask('mocha', 'mochaTest');
  grunt.registerTask('default', 'watch');
};