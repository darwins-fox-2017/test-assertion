var assert = require('assert')
let math = require('../basic-math')

describe('Math Basic Operation', function() {
  it('result pertambahan: 8', function() {
    assert.equal(math.pertambahan(4,4), 8);
  });

  it('result pertambahan: harus memasukkan 2 parameter', function() {
    assert.equal(math.pertambahan(4),"harus memasukkan 2 parameter");
  });

  it('result pertambahan: parameter harus number', function() {
    assert.equal(math.pertambahan('4', '4'),"parameter harus number");
  });

  it('result pengurangan: 1', function() {
    assert.equal(math.pengurangan(5,4), 1);
  });

  it('result pengurangan: harus memasukkan 2 parameter', function() {
    assert.equal(math.pengurangan(4),"harus memasukkan 2 parameter");
  });

  it('result pengurangan: parameter harus number', function() {
    assert.equal(math.pengurangan('4', '4'),"parameter harus number");
  });

  it('result perkalian: 25', function() {
    assert.equal(math.perkalian(5,5), 25);
  })

  it('result perkalian: harus memasukkan 2 parameter', function() {
    assert.equal(math.perkalian(4),"harus memasukkan 2 parameter");
  });

  it('result perkalian: parameter harus number', function() {
    assert.equal(math.perkalian('4', '4'),"parameter harus number");
  });

  it('result pembagian: 2', function() {
    assert.equal(math.pembagian(10,5), 2);
  })

  it('result pembagian: harus memasukkan 2 parameter', function() {
    assert.equal(math.pembagian(4),"harus memasukkan 2 parameter");
  });

  it('result pembagian: parameter harus number', function() {
    assert.equal(math.pembagian('4', '4'),"parameter harus number");
  });

  it('result akar: 9', function() {
    assert.equal(math.akar(81), 9);
  })

  it('result akar: harus memasukkan 1 parameter', function() {
    assert.equal(math.akar(),"harus memasukkan 1 parameter");
  });

  it('result akar: parameter harus number', function() {
    assert.equal(math.akar('4', '4'),"parameter harus number");
  });

  it('result pangkat: 36', function() {
    assert.equal(math.pangkat(6,2), 36);
  })

  it('result pangkat: harus memasukkan 2 parameter', function() {
    assert.equal(math.pangkat(4),"harus memasukkan 2 parameter");
  });

  it('result pangkat: parameter harus number', function() {
    assert.equal(math.pangkat('4', '4'),"parameter harus number");
  });
});
