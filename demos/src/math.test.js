const {sum, mult, div} = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('mult 1 * 2 to equal 3', () => {
  expect(mult(1, 2)).toBe(2);
});
test('div 2 / 2 to equal 3', () => {
  expect(div(2, 2)).toBe(1);
});
