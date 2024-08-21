export interface IManageableClassRegistry extends IClassRegistry {
  register<T extends Class, R extends object>(record: ClassRegistryRecord<T, R>): void;
}

export interface IClassRegistry {
  getMembers(): Map<Class, object>;
}

export type Class = { new (...args: any[]): object }

export type ClassRegistryRecord<T extends Class, R extends object> = {
  type: T;
  instance: R;
}
