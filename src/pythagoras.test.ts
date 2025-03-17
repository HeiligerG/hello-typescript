import { isTriplet } from './pythagoras';

describe('Pythagoras tests', () => {
  test('shoud return true for vallid pythagorean triplet', () => {
    // 3²+4²=5² (9+16=25)
    expect(isTriplet(3, 4, 5)).toBe(true);
  });

  test('should return false for invalid pythagorean triplte', () => {
    // 2²+3²≠6² (4+9≠36)
    expect(isTriplet(2, 3, 6)).toBe(false);
  });
});