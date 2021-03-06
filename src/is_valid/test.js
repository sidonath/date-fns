// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var isValid = require('./')

describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = isValid(new Date())
    assert(result === true)
  })

  it('returns false if the given date is invalid', function () {
    var result = isValid(new Date(''))
    assert(result === false)
  })

  it('throws an exception if the argument is not an instance of Date', function () {
    var block = isValid.bind(null, '')
    assert.throws(block, TypeError, '[object String] is not an instance of Date')
  })
})
