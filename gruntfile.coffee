module.exports = (grunt) ->

  require('time-grunt')(grunt)

  require('load-grunt-config')(grunt)


  grunt.registerTask 'default', ['metalsmith', 'bowercopy', 'concat', 'clean', 'imagemin']
  grunt.registerTask 'release', ['default', 'uglify', 'compress']
  #grunt.registerTask 'deploy'