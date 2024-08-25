export const emailValidator = (target: any, propertyKey: string) => {
  let value: string;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const getter = () => value;
  const setter = (newValue: string) => {
    if (!emailRegex.test(newValue)) {
      throw new Error(`Invalid email address: ${newValue}`);
    }
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}
