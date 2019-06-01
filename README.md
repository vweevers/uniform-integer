# uniform-integer

> **Get an integer between a min and max, bring your own random number generator.**  
> See also [`zipfian-integer`](https://github.com/vweevers/zipfian-integer).

[![npm status](http://img.shields.io/npm/v/uniform-integer.svg)](https://www.npmjs.org/package/uniform-integer)
[![node](https://img.shields.io/node/v/uniform-integer.svg)](https://www.npmjs.org/package/uniform-integer)
[![Travis build status](https://img.shields.io/travis/vweevers/uniform-integer.svg?label=travis)](http://travis-ci.org/vweevers/uniform-integer)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const uniform = require('uniform-integer')
const sample = uniform(1, 100)

console.log(sample())
console.log(sample())
```

This logs two random integers between 1 and 100 (inclusive). You can optionally inject a (seeded) random number generator. The following example always returns the same integers in sequence unless you change the seed:

```js
const random = require('pseudo-math-random')('a seed')
const sample = uniform(1, 100, random)
```

## API

### `sample = uniform(min, max[, rng])`

Create a new random number generator with a uniform distribution. The `rng` if provided must be a function that returns a random floating-point number between 0 (inclusive) and 1 (exclusive). It defaults to [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

### `num = sample()`

Get a random integer between `min` (inclusive) and `max` (inclusive).

## Install

With [npm](https://npmjs.org) do:

```
npm install uniform-integer
```

## License

[MIT](LICENSE.md) © 2019-present Vincent Weevers
