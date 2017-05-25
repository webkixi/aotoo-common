'use strict';

var isClient = typeof window !== 'undefined';
var context = function () {
  return isClient ? window : global;
}() || {};

// 全局
context.React = require('react'), context.ReactDom = function (C) {
  return C ? require('react-dom') : require('react-dom/server');
}(isClient);
context.SAX = require('fkp-sax');
context._ = require('lodash');
context.$ = function (C) {
  return C ? require('jquery') : require('cheerio');
}(isClient);

function custom() {
  if (isClient) {
    React.render = ReactDom.render;
    React.unmountComponentAtNode = ReactDom.unmountComponentAtNode;
    React.findDOMNode = ReactDom.findDOMNode;
  }
  return {};
}
module.exports = custom();