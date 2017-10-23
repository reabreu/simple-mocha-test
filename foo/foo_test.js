const { foo } = require('./foo.js') // CommonJS
const { expect } = require('chai');

describe('Reducers', () => {
  it('handles plus', () => {
    expect(foo(2,1)).to.eql(3);
  });
});
