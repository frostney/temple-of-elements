module.exports =
  staticSite:
    options:
      metadata:
        title: 'Temple of Elements'
        description: 'Temple of Elements'
      plugins:
        'metalsmith-markdown': {}
        'metalsmith-stylus':
          nib: true
        'metalsmith-templates':
          engine: 'jade'
          directory: 'templates'
        'metalsmith-coffee': {}
    src: 'src'
    dest: 'build'