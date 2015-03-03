/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp();


var fonts = pickFiles('./app/styles/fonts', {
  srcDir: '/',
  files: ['*.css', '*.eot', '*.svg', '*.ttf', '*.woff'],
  destDir: '/assets/fonts'
});

app.import('bower_components/normalize.css/normalize.css');
app.import('bower_components/csswizardry-grids/csswizardry-grids.scss');
app.import('bower_components/Autolinker.js/dist/Autolinker.js');
app.import('bower_components/moment/moment.js');

module.exports = app.toTree(fonts);
