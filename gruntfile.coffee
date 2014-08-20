module.exports = (grunt) ->

  require('time-grunt')(grunt)

  require('load-grunt-config')(grunt)


  grunt.registerTask 'default', ['metalsmith', 'bowercopy', 'clean']
  grunt.registerTask 'release', ['default', 'uglify', 'compress']
  #grunt.registerTask 'deploy'