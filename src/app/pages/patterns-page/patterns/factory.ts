abstract class Device {
  abstract name: string;

  abstract turnIn(): void;
}

abstract class DeviceFactory {
  abstract createDevice(): Device;
}

class IPhone extends Device {
  public name: string = 'IPhone';

  public turnIn(): void {
    console.log('IPhone is turn in.')
  }
}

class SamsungGalaxy extends Device {
  public name: string = 'Samsung Galaxy';

  public turnIn(): void {
    console.log('Samsung Galaxy is turn in.');
  }
}

class IPhoneFactory extends DeviceFactory {
  public override createDevice(): IPhone {
    return new IPhone();
  }
}

class SamsungGalaxyFactory extends DeviceFactory {
  public override createDevice(): SamsungGalaxy {
    return new SamsungGalaxy();
  }
}

const iphoneFactory = new IPhoneFactory();
const samsungGalaxyFactory = new SamsungGalaxyFactory();

const samsungGalaxy = samsungGalaxyFactory.createDevice();
const iphone = iphoneFactory.createDevice();
