export const validateProperty = (validators: Validator[]) => (target: any, propertyKey: string) => {
  const value = target[propertyKey];

  const isValid = validators.map(validator => validator(value)).every(Boolean);

  if (!isValid) {
    console.error(`Value ${value} of property "${propertyKey}" is invalid`);
  }
}

export type Validator = (value: any) => boolean;
