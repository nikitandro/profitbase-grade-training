import { Class, classRegistryInstance } from '@app/shared';

export const registerClass = <T extends Class>(constructor: T): T => {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      classRegistryInstance.register({ type: constructor, instance: this });
    }
  };
}
