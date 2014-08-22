module.exports =
  dynamic:
    files: [
      {
        expand: true,
        cwd: 'build/images/',
        src: ['**/*.{png,jpg}'],
        dest: 'build/images/'
      }
    ]
