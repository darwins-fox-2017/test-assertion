'use strict'
const assert = require('assert')
const pengurangan = require('../fitur/fiturPengurangan')

describe('Pengecekan fitur pengurangan', () => {
  it('harus mengembalikan 2 apabila 5 - 3 ', () => {
    assert.equal(pengurangan(5, 3), 2)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    assert.equal(pengurangan(2), '2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    assert.equal(pengurangan('5', '2'), 'inputan harus number')
  })
})
