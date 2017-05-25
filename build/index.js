'use strict';

var _aotoo = require('aotoo');

var _aotoo2 = _interopRequireDefault(_aotoo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Aotoo
 react: React,
 reactDom: ReactDom,
 sax: SAX,
 _: lodash
 $: jquery2
 */

var isClient = typeof window !== 'undefined';
var context = function () {
  return isClient ? window : global;
}() || {};
require('./lib/common');


var Aotoo = context.Aotoo;
if (!Aotoo) {
  Aotoo = context.Aotoo = _aotoo2.default;
}

module.exports = Aotoo;