import { InjectionToken } from '@angular/core';
import { IManageableClassRegistry } from '@app/shared';

export const MANAGEABLE_CLASS_REGISTRY_TOKEN =
  new InjectionToken<IManageableClassRegistry>('MANAGEABLE_CLASS_REGISTRY_TOKEN');
