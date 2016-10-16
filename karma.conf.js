module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'src/*.spec.js'
    ],
    plugins : [
      'karma-jasmine', 
      'karma-phantomjs-launcher'
    ],
  })
}
