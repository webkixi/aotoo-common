import 'aotoo'
import 'aotoo-web-widgets'
import jquery from 'jquery'

React.render = ReactDom.render;
Aotoo.context.$ = jquery
Aotoo.context.jQuery = jquery

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