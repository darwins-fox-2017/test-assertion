const assert  = require('assert');
const sqrt    = require('../features/sqrt')

describe('Sqrt: (a)', () => {
  it('Testing type of params are numbers', () => {
    assert.equal(sqrt("25"), 'It should number!');
  }),
  it('Should return 5', () => {
    assert.equal(sqrt(25), 5);
  })
})
