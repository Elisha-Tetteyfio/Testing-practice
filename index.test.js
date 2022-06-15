const fns = require('./index');

test('Checks length of "Elisha" to be 6', () => {
  expect(fns.stringLength('Elisha')).toBe(6);
});

test('Checks that length of "" is too small', () => {
  expect(fns.stringLength('')).toBe("Too small");
});

test('Checks that length of "Elisha Tetteyfio" is too long', () => {
  expect(fns.stringLength('Elisha Tetteyfio')).toBe("Too big");
});

test('Reverses Elisha as ahsilE', () => {
  expect(fns.reverseString('Elisha')).toBe("ahsilE");
});

describe("Checking calculator functions", () => {
  describe("Checking add function", () => {
    test('Adds 1 and 2 to be 3', () => {
      expect(fns.calculator.add(1,2)).toBe(3);
    });
    test('Adds 0 and 5 to be 5', () => {
      expect(fns.calculator.add(0,5)).toBe(5);
    });
    test('Adds 10 and 100 to be 110', () => {
      expect(fns.calculator.add(10,100)).toBe(110);
    });
  });
  describe("Checking subtract function", () => {
    test('Subtracts 1 from 2 to be 1', () => {
      expect(fns.calculator.subtract(2,1)).toBe(1);
    });
    test('Subtracts 0 from 5 to be 5', () => {
      expect(fns.calculator.subtract(5,0)).toBe(5);
    });
    test('Subtracts 100 from 10 to be -90', () => {
      expect(fns.calculator.subtract(10,100)).toBe(-90);
    });
  });
  describe("Checking divide function", () => {
    test('Divides 1 by 2 to be 0.5', () => {
      expect(fns.calculator.divide(1,2)).toBe(0.5);
    });
    test('Divides 0 by 5 to be 0', () => {
      expect(fns.calculator.divide(0,5)).toBe(0);
    });
    test('Divides 100 by 10 to be 10', () => {
      expect(fns.calculator.divide(100,10)).toBe(10);
    });
  });
  describe("Checking multiply function", () => {
    test('Multiplies 1 by 2 to be 2', () => {
      expect(fns.calculator.multiply(1,2)).toBe(2);
    });
    test('Multiplies 0 by 5 to be 0', () => {
      expect(fns.calculator.multiply(0,5)).toBe(0);
    });
    test('Multiplies 10 by 100 to be 1000', () => {
      expect(fns.calculator.multiply(10,100)).toBe(1000);
    });
  });
});

test("Capitalizes 'elisha' as 'Elisha'", () => {
  expect(fns.capitalize('elisha')).toBe('Elisha');
})