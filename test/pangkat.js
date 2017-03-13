'use strict'
const assert = require('assert')
const pangkat = require('../fitur/fiturPangkat')

describe('Pengecekan fitur pangkat', () => {
  it('harus mengembalikan 8', () => {
    assert.equal(pangkat(2, 3), 8)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    assert.equal(pangkat(2), '2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    assert.equal(pangkat('2', '3'), 'inputan harus number')
  })
})
