import { classRegistryInstance } from '@app/shared';

export const registerClass = <T extends { new (...args: any[]): object }>(constructor: T): T => {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      classRegistryInstance.register({ type: constructor, instance: this });
    }
  };
}
