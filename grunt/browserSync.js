module.exports = {
  // desktop: {
  //     src : [
  //     	'css/styles.css',
  //     	'js/min/app.min.js',
  //     	'./*.html'
  //     ]
  // },

  // options: {
  //     server: {
  //         baseDir: "./"
  //     },
  //     watchTask: true
  // }

  bsFiles: {
    src : ["css/*.css", "./*.html", "js/min/app.min.js"]
  },

  options: {
      server: {
          baseDir: "./"
      },
      watchTask: true
  },

  unitTest: {
  	src : [
  		'tests/keyLogger/index.html',
  		'tests/keyLogger/test.js',
  		'tests/keyLogger/js/keyLogger.js'
  	]
  }

}
