module.exports =
  all:
    options:
      livereload: true
    files: ['gruntfile.coffee', 'grunt/*.coffee', 'src/**/*']
    tasks: ['default']