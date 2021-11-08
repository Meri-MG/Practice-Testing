const { reverseString, stringLength, Calculator, capitalize } = require('./testing');

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

describe('Calculator add function', () => {
    test('it adds two numbers', () => {
        expect(Calculator.add(4, 5)).toBe(9);
    })
    test('should be less than 20', () => {
        expect(Calculator.add(15, 3)).toBeLessThan(20);
    })
    test('should be greater or equal to 100', () => {
        expect(Calculator.add(89, 11)).toBeGreaterThanOrEqual(100);
    })
})

describe('Calculator subtract function', () => {
    test('it subtract two numbers', () => {
        expect(Calculator.subtract(4, 5)).toBe(-1);
    })
    test('should be less than 20', () => {
        expect(Calculator.subtract(15, 3)).toBeLessThan(20);
    })
    test('should be greater or equal to 100', () => {
        expect(Calculator.subtract(150, 50)).toBeGreaterThanOrEqual(100);
    })
})

describe('Calculator multiply function', () => {
    test('it multiplies two numbers', () => {
        expect(Calculator.multiply(4, 0)).toBe(0);
    })
    test('should be less than or equal 20', () => {
        expect(Calculator.multiply(15, 3)).toBeLessThanOrEqual(50);
    })
    test('should be greater or equal to 100', () => {
        expect(Calculator.multiply(5, 50)).toBeGreaterThanOrEqual(100);
    })
})

describe('Calculator divide function', () => {
    test('it divides two numbers', () => {
        expect(Calculator.divide(0, 6)).toBe(0);
    })
    test('should be less than or equal 20', () => {
        expect(Calculator.divide(15, 3)).toBeLessThanOrEqual(5);
    })
    test('should be greater or equal to 100', () => {
        expect(Calculator.divide(55, 5)).toBeGreaterThan(10);
    })
})

test('should capitalize first letter', () => {
    expect(capitalize('cup')).toEqual('Cup');
})
