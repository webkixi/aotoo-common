require('aotoo')
require('aotoo-web-widgets')
const lodash = require('lodash/lodash.min')
const isClient = Aotoo.isClient

var xquery
if (isClient) {
  xquery = require('jquery/dist/jquery.min')
} else {
  xquery = require('cheerio')
}

var context = ( C => C ? window : global)(isClient) || {}


context.$ = xquery
context._ = lodash

module.exports = {}