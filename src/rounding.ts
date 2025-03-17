export function roundTo(x: number, granularity: number): number {
  const factor = 1.0 / granularity;
  return Math.round(x * factor) / factor;
}
