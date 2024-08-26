class PureSingleton {
  private static _instance?: PureSingleton;

  private constructor() {}

  public static getInstance(): PureSingleton {
    if (!PureSingleton._instance) {
      PureSingleton._instance = new PureSingleton();
      return PureSingleton._instance;
    }

    return PureSingleton._instance;
  }
}
