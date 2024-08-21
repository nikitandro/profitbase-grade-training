import { Provider } from '@angular/core';
import { MANAGEABLE_CLASS_REGISTRY_TOKEN } from '@app/app/di/class-registry/manageable-class-registry.token';
import { classRegistryInstance } from '@app/shared';

export const manageableClassRegistryProvider: Provider = {
  provide: MANAGEABLE_CLASS_REGISTRY_TOKEN,
  useValue: classRegistryInstance,
}
