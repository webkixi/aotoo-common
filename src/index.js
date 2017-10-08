require('aotoo')
require('aotoo-web-widgets')
const isClient = Aotoo.isClient

var xquery
if (isClient) {
  xquery = require('jquery/dist/jquery.min')
} else {
  xquery = function(){}
}

var context = ( C => C ? window : global)(isClient) || {}

context.$ = xquery

module.exports = {}