'use strict';

var suitcss = require('suitcss-preprocessor');

exports.name = 'suitcss';
exports.inputFormats = ['suitcss', 'css'];
exports.outputFormat = 'css';

exports.render = suitcss;
