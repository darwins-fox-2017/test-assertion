var assert = require('assert');
var add = require('../add.js')
var min = require('../min.js')
var multiply = require('../multiply.js')
var devide = require('../devide.js')
var root = require('../root.js')
var pow = require('../pow.js')

describe('Testing perintah aritmatika, ', function () {
    // positive case
    it('Function add mereturn angka 5', function () {
        assert.equal(add(2, 3), 5, 'hasil return function bukan 5');
    });
    // negative case
    it('Function add mereturn angka 5', function () {
        assert.equal(add(2), 5, 'function add, harus memakai 2 Parameter');
    });

    // positive case
    it('Function min mereturn angka 1', function () {
        assert.equal(min(3, 2), 1, 'hasil return function bukan 5');
    });
    // negative case
    it('Function min mereturn angka 1', function () {
        assert.equal(min(2), 5, 'function min, harus memakai 2 Parameter');
    });

    // positive case
    it('Function multiply mereturn angka 4', function () {
        assert.equal(multiply(2, 2), 4, 'hasil return function bukan 5');
    });
    // negative case
    it('Function multiply mereturn angka 4', function () {
        assert.equal(multiply(2), 8, 'function multiply, harus memakai 2 Parameter');
    });

    // positive case
    it('Function devide mereturn angka 3', function () {
        assert.equal(devide(6, 2), 3, 'hasil return function bukan 5');
    });
    // negative case
    it('Function devide mereturn angka 3', function () {
        assert.equal(devide(2), 8, 'function devide, harus memakai 2 Parameter');
    });

    // positive case
    it('Function root mereturn angka 3', function () {
        assert.equal(root(9), 3, 'hasil return function bukan 8');
    });
    // negative case
    it('Function root mereturn angka 3', function () {
        assert.equal(root(2, 5), 8, 'function devide, harus memakai 1 Parameter');
    });

    // positive case
    it('Function pow mereturn angka 81', function () {
        assert.equal(pow(3, 4), 81, 'hasil return function bukan 8');
    });
    // negative case
    it('Function pow mereturn angka 81', function () {
        assert.equal(pow(2), 8, 'function pow, harus memakai 1 Parameter');
    });
});
