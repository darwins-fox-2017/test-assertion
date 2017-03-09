const assert  = require('assert');
const divide  = require('../features/divide')

describe('Divide: a + b', () => {
  it('Testing 2 params', () => {
    assert.equal(divide(100), 'It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    assert.equal(divide("100", "5"), 'It should number!');
  }),
  it('Should return 20', () => {
    assert.equal(divide(100, 5), 20);
  })
})
