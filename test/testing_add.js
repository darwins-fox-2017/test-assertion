const assert  = require('assert');
const add     = require('../features/add')

describe('Add: a + b', () => {
  it('Testing 2 params', () => {
    assert.equal(add(10), 'It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    assert.equal(add("5", "5"), 'It should number!');
  }),
  it('Should return 10', () => {
    assert.equal(add(5, 5), 10);
  })
})
