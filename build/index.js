'use strict';

require('aotoo');

require('aotoo-web-widgets');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

React.render = ReactDom.render;
Aotoo.context.$ = _jquery2.default;
Aotoo.context.jQuery = _jquery2.default;

// require('aotoo')
// require('aotoo-web-widgets')
// const isClient = Aotoo.isClient

// var xquery
// if (isClient) {
//   xquery = require('jquery/dist/jquery.min')
// } else {
//   xquery = function(){}
// }

// var context = ( C => C ? window : global)(isClient) || {}

// context.$ = xquery
// context.jQuery = xquery

// module.exports = {}