import { cache } from '@app/shared';

export class MathOperations {
  @cache
  public static calculateFibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.calculateFibonacci(n - 1) + this.calculateFibonacci(n - 2);
  }
}
