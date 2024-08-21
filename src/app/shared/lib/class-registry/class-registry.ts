import { Class, ClassRegistryRecord, IManageableClassRegistry } from './types';

export class ClassRegistry implements IManageableClassRegistry {
  private readonly _classes: Map<Class, object[]> = new Map<Class, object[]>();

  public register<T extends Class, R extends object>({ instance, type }: ClassRegistryRecord<T, R>): void {
    const arr = this._classes.get(type);
    if (arr) {
      arr.push(instance)
      this._classes.set(type, arr);
      return;
    }
    this._classes.set(type, [instance]);
  }

  public getMembers(): Map<Class, object[]> {
    return this._classes;
  }
}
