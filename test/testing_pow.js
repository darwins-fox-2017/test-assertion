const assert  = require('assert');
const pow     = require('../features/pow')

describe('Pow: (a, b)', () => {
  it('Testing 2 params', function() {
    assert.equal(pow(10), 'It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    assert.equal(pow("100", "2"), 'It should number!');
  }),
  it('Should return 25', () => {
    assert.equal(pow(5, 2), 25);
  })
})
