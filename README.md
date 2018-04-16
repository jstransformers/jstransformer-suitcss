# jstransformer-suitcss

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-suitcss.svg)](https://greenkeeper.io/)

[SuitCSS](https://github.com/suitcss/preprocessor) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-suitcss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-suitcss)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-suitcss/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-suitcss)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-suitcss/master.svg)](http://david-dm.org/jstransformers/jstransformer-suitcss)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-suitcss.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-suitcss.svg)](https://www.npmjs.org/package/jstransformer-suitcss)

## Installation

    npm install jstransformer-suitcss

## API

```js
var suitcss = require('jstransformer')(require('jstransformer-suitcss'))

suitcss.render(':root {--red: #0F0;} body {color: var(--red);}').body
//=>
// body {
//   color: #0F0;
// }
```

## License

MIT
