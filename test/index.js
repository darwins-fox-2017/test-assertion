let mocha = require('mocha')
let should = require('chai').should()

let add = require('../add')
describe('Test fungsi matematikan', function(){
  describe('Penambahan', function(){
    it('Seharusnya mengembalkan 7 jika value paramaternya 3 dan 4', function(){
      add(3,4).should.equal(7)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      add(3).should.equal('Paramater Kurang')
    })
  })
})
