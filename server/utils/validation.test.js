const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should allow string with non-space chars', () => {
    var isReal = isRealString('String');

    expect(isReal).toBe(true);
  });

  it('should reject string with only spaces', () => {
    var isReal = isRealString('   ');

    expect(isReal).toBe(false);
  });

  it('should reject non-string values', () => {
    var isReal = isRealString(1234);

    expect(isReal).toBe(false);
  });
});
