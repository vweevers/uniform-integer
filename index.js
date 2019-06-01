'use strict'

module.exports = function uniform (min, max, rng) {
  rng = rng || Math.random

  return function sample () {
    return Math.floor(rng() * (max - min + 1) + min)
  }
}
