import { Provider } from '@angular/core';
import { CLASS_REGISTRY_TOKEN } from './class-registry.token';
import { classRegistryInstance } from '@app/shared';



export const classRegistryProvider: Provider = {
  provide: CLASS_REGISTRY_TOKEN,
  useValue: classRegistryInstance,
}
