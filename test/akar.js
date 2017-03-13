'use strict'
const assert = require('assert')
const akar = require('../fitur/fiturAkar')

describe('Pengecekan fitur akar', () => {
  it('harus mengembalikan 3 ', () => {
    assert.equal(akar(9), 3)
  })

  it('inputan harus number', () => {
    assert.equal(akar('2'), 'inputan harus number')
  })
})
