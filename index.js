'use strict'

var fs = require('fs')
var path = require('path')
var suitcss = require('suitcss-preprocessor')

exports.name = 'suitcss'
exports.outputFormat = 'css'

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    suitcss(str, options).then(function (result) {
      if (result && result.css) {
        resolve(result.css)
      } else {
        reject(result)
      }
    })
  })
}

exports.renderFileAsync = function (filename, options) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        options = options || {}
        options.root = options.root || path.dirname(filename)
        exports.renderAsync(data, options).then(resolve).catch(reject)
      }
    })
  })
}
