const { reverseString, stringLength } = require('./testing');

test('should return string length', () => {
  expect(stringLength('phone')).toBe(5);
});

test('should throw an error if string is less than 1 and more than 10', () => {
    expect(() => {
        stringLength('txjtxtrxdjycytv');
    }).toThrow('string should be more than 1 or less than 10');
});

test('should return reversed string', () => {
    expect(reverseString('Meri')).toEqual('ireM');
})
