/**
 * Prüft, ob die drei Zahlen ein pythagoräisches Tripel bilden (a²+b²=c²)
 * @param a Erste Zahl
 * @param b Zweite Zahl
 * @param c Dritte Zahl (Hypothenuse)
 * @returns true wenn a²+b²=c², false andernfalls
 */
export function isTriplet(a: number, b: number, c: number): boolean {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
  }