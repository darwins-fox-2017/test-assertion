let mocha = require('mocha')
let should = require('chai').should()
// add
let add = require('../add')
let sub = require('../sub')

describe('Test fungsi matematikan', function(){
  describe('Penambahan', function(){
    it('Seharusnya mengembalkan 7 jika value paramaternya 3 dan 4', function(){
      add(3,4).should.equal(7)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      add(3).should.equal('Paramater Kurang')
    })
  })
  describe('Pengurangan', function(){
    it('Seharusnya mengembalkan 5 jika value paramaternya 9 dan 4', function(){
      sub(9,4).should.equal(5)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      sub(3).should.equal('Paramater Kurang')
    })
    it('Harus keluar "Tipe data salah", jika type data yang dimasukan bukan angka', function(){
      sub("3",2).should.equal('Tipe data salah')
    })
  })
})
