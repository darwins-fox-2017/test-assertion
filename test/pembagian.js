'use strict'
const assert = require('assert')
const pembagian = require('../fitur/fiturPembagian')

describe('Pengecekan fitur pembagian', () => {
  it('harus mengembalikan 6 apabila 12 / 2 ', () => {
    assert.equal(pembagian(12, 2), 6)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    assert.equal(pembagian(12), '2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    assert.equal(pembagian('12', '2'), 'inputan harus number')
  })
})
