# jstransformer-suitcss [![The MIT License][license-img]][license-url]

[SuitCSS](https://github.com/suitcss/preprocessor) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-suitcss --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var suitcss = require('jstransformer')(require('jstransformer-suitcss'));

suitcss.render(':root {--red: #0F0;} body {color: var(--red);}').body
//=>
// body {
//   color: #0F0;
// }
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-suitcss/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-suitcss
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-suitcss.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-suitcss
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-suitcss.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-suitcss
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-suitcss.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-suitcss
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-suitcss.svg

[jstransformers-url]: http://github.com/jstransformers
