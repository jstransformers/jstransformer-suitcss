'use strict'

const fs = require('fs')
const path = require('path')
const suitcss = require('suitcss-preprocessor')

exports.name = 'suitcss'
exports.outputFormat = 'css'

exports.renderAsync = function (str, options) {
  return new Promise((resolve, reject) => {
    suitcss(str, options).then(result => {
      if (result && result.css) {
        resolve(result.css)
      } else {
        reject(result)
      }
    })
  })
}

exports.renderFileAsync = function (filename, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
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
