// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var startOfYear = require('./')

describe('startOfYear', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of a year', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Dec */, 1, 0, 0, 0, 0))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
