let assert = require('assert')
let math = require('../math')

describe("Testing Basic Aritmatik", function () {
  describe("Testing Add", function () {
    it("should return 3 numbers", function () {
      assert.equal(math.add(1,2),3)
    })
    it("should return 3 string", function () {
      assert.equal(math.add(1,2),"3")
    })
    it("should return must 2 numbers", function () {
      assert.equal(math.add(2),"must 2 numbers")
    })
    it("should return variabel must be number", function () {
      assert.equal(math.add("hello",2),"variabel must be number")
    })
    it("should not return 7", function () {
      assert.notEqual(math.add(2,3),7)
    })
    it("should return 5 number", function () {
      assert.strictEqual(math.add(2,3),5)
    })
  })

  describe("Testing Substract", function () {
    it("should return 5 numbers", function () {
      assert.equal(math.substract(7,2),5)
    })
    it("should return 5 string", function () {
      assert.equal(math.substract(7,2),"5")
    })
    it("should return must 2 numbers", function () {
      assert.equal(math.substract(2),"must 2 numbers")
    })
    it("should return variabel must be number", function () {
      assert.equal(math.substract("hello",2),"variabel must be number")
    })
    it("should not return 7", function () {
      assert.notEqual(math.substract(7,3),7)
    })
    it("should return 5 number", function () {
      assert.strictEqual(math.substract(7,2),5)
    })
  })

  describe("Testing Multiply", function () {
    it("should return 14 numbers", function () {
      assert.equal(math.multiply(7,2),14)
    })
    it("should return 14 string", function () {
      assert.equal(math.multiply(7,2),"14")
    })
    it("should return must 2 numbers", function () {
      assert.equal(math.multiply(2),"must 2 numbers")
    })
    it("should return variabel must be number", function () {
      assert.equal(math.multiply("hello",2),"variabel must be number")
    })
    it("should not return 7", function () {
      assert.notEqual(math.multiply(7,3),7)
    })
    it("should return 14 number", function () {
      assert.strictEqual(math.multiply(7,2),14)
    })
  })

  describe("Testing Devide", function () {
    it("should return 4 numbers", function () {
      assert.equal(math.devide(8,2),4)
    })
    it("should return 4 string", function () {
      assert.equal(math.devide(8,2),"4")
    })
    it("should return must 2 numbers", function () {
      assert.equal(math.devide(2),"must 2 numbers")
    })
    it("should return variabel must be number", function () {
      assert.equal(math.devide("hello",2),"variabel must be number")
    })
    it("should not return 7", function () {
      assert.notEqual(math.devide(8,2),7)
    })
    it("should return 4 number", function () {
      assert.strictEqual(math.devide(8,2),4)
    })
  })

  describe("Testing Exponent", function () {
    it("should return 49 numbers", function () {
      assert.equal(math.exponent(7),49)
    })
    it("should return 49 string", function () {
      assert.equal(math.exponent(7),"49")
    })
    it("should return variabel must be number", function () {
      assert.equal(math.exponent("hello"),"variabel must be number")
    })
    it("should not return 56", function () {
      assert.notEqual(math.exponent(7),56)
    })
    it("should return 14 number", function () {
      assert.strictEqual(math.exponent(7),49)
    })
  })

  describe("Testing Root", function () {
    it("should return 6 numbers", function () {
      assert.equal(math.root(36),6)
    })
    it("should return 6 string", function () {
      assert.equal(math.root(36),"6")
    })
    it("should return variabel must be number", function () {
      assert.equal(math.root("hello"),"variabel must be number")
    })
    it("should not return 7", function () {
      assert.notEqual(math.root(36),7)
    })
    it("should return 6 number", function () {
      assert.strictEqual(math.root(36),6)
    })
  })

})
