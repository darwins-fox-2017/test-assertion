const assert     = require('assert');
const multiply   = require('../features/multiply')

describe('Multiply: a * b', () => {
  it('Testing 2 params', () => {
    assert.equal(multiply(10), 'It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    assert.equal(multiply("10", "10"), 'It should number!');
  }),
  it('Should return 100', () => {
    assert.equal(multiply(10, 10), 100);
  })
})
