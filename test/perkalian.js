'use strict'
const assert = require('assert')
const perkalian = require('../fitur/fiturPerkalian')

describe('Pengecekan fitur perkalian', () => {
  it('harus mengembalikan 6 apabila 2 * 3 ', () => {
    assert.equal(perkalian(2, 3), 6)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    assert.equal(perkalian(2), '2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    assert.equal(perkalian('2', '3'), 'inputan harus number')
  })
})
