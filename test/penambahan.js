'use strict'
const assert = require('assert')
const pertambahan = require('../fitur/fiturPenambahan')

describe('Pengecekan fitur pertambahan', () => {
  it('harus mengembalikan 5 apabila 2 + 3 ', () => {
    assert.equal(pertambahan(2, 3), 5)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    assert.equal(pertambahan(2), '2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    assert.equal(pertambahan('2', '3'), 'inputan harus number')
  })
})
