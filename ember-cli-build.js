/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    vendorFiles: {
      'webfontloader.js': 'bower_components/webfontloader/webfontloader.js',
      'punycode.js': 'bower_components/punycode/punycode.js'
    }
  });

  app.import('bower_components/normalize.css/normalize.css');

  return app.toTree();
};
