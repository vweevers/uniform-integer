'use strict'

const test = require('tape')
const uniform = require('.')

test('basic', function (t) {
  const sample = uniform(0, 100)

  t.is(typeof sample(), 'number')
  t.is(typeof sample(), 'number')

  t.end()
})

test('bring your own PRNG', function (t) {
  t.is(uniform(0, 100, () => 0.5)(), 50)
  t.is(uniform(0, 100, () => 0)(), 0)
  t.end()
})
