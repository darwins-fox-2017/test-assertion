let assert = require('assert')
let math = require('../math')

// describe("Pengecekan perhitungan matematika", function () {
//   describe("Pengecekan perkalian", function () {
//     it("")
//   })
// })

// add test ===================================================================
assert.equal(math.add(1,2),3)
assert.equal(math.add(1,2),"3")
assert.equal(math.add(2),"must 2 numbers")
assert.equal(math.add("hello",2),"variabel must be number")
assert.notEqual(math.add(2,3),7)
assert.strictEqual(math.add(2,3),5)
// substract test =============================================================
assert.equal(math.substract(7,2),5)
assert.equal(math.substract(7,2),"5")
assert.equal(math.substract(2),"must 2 numbers")
assert.equal(math.substract("hello",2),"variabel must be number")
assert.notEqual(math.substract(7,3),7)
assert.strictEqual(math.substract(7,2),5)
// multiply test =============================================================
assert.equal(math.multiply(7,2),14)
assert.equal(math.multiply(7,2),"14")
assert.equal(math.multiply(2),"must 2 numbers")
assert.equal(math.multiply("hello",2),"variabel must be number")
assert.notEqual(math.multiply(7,3),7)
assert.strictEqual(math.multiply(7,2),14)
// devide test =============================================================
assert.equal(math.devide(8,2),4)
assert.equal(math.devide(8,2),"4")
assert.equal(math.devide(2),"must 2 numbers")
assert.equal(math.devide("hello",2),"variabel must be number")
assert.notEqual(math.devide(8,2),7)
assert.strictEqual(math.devide(8,2),4)
// exponent test =============================================================
assert.equal(math.exponent(7),49)
assert.equal(math.exponent(7),"49")
assert.equal(math.exponent("hello"),"variabel must be number")
assert.notEqual(math.exponent(7),56)
assert.strictEqual(math.exponent(7),14)
// root test =============================================================
assert.equal(math.root(36),6)
assert.equal(math.root(36),"6")
assert.equal(math.root("hello"),"variabel must be number")
assert.notEqual(math.root(36),7)
assert.strictEqual(math.root(36),6)
