const assert     = require('assert');
const substract  = require('../features/substract')

describe('Substract: a - b', () => {
  it('Testing 2 params', () => {
    assert.equal(substract(10), 'It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    assert.equal(substract("10", "5"), 'It should number!');
  }),
  it('Should return 5', () => {
    assert.equal(substract(10, 5), 5);
  })
})
