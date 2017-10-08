'use strict';

require('aotoo');
require('aotoo-web-widgets');
var isClient = Aotoo.isClient;

var xquery;
if (isClient) {
  xquery = require('jquery/dist/jquery.min');
} else {
  xquery = function xquery() {};
}

var context = function (C) {
  return C ? window : global;
}(isClient) || {};

context.$ = xquery;

module.exports = {};