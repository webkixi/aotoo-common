'use strict';

require('aotoo');
require('aotoo-web-widgets');
var lodash = require('lodash/lodash.min');
var isClient = Aotoo.isClient;

var xquery;
if (isClient) {
  xquery = require('jquery/dist/jquery.min');
} else {
  xquery = require('cheerio');
}

var context = function (C) {
  return C ? window : global;
}(isClient) || {};

context.$ = xquery;
context._ = lodash;

module.exports = {};