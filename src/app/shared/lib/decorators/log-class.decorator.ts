export const logClass = <T extends { new (...args: unknown[]): unknown }>(constructor: T) => {
  console.log(constructor);
}
