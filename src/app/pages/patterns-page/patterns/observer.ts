class Observer<T> {
  constructor(private onUpdate: (value: T) => void) {}

  public update(value: T): void {
    this.onUpdate(value);
  }
}

class Observable<T> {
  private readonly subscribers: Set<Observer<T>> = new Set();

  public subscribe(observer: Observer<T>): void {
    this.subscribers.add(observer);
  }

  public unsubscribe(observer: Observer<T>): void {
    this.subscribers.delete(observer);
  }

  public notify(value: T): void {
    this.subscribers.forEach(subscriber => subscriber.update(value));
  }
}

const observable = new Observable<string>();

const observer = new Observer((value) => console.log(value))

observable.subscribe(observer);

observable.notify('Hello world.');

observable.unsubscribe(observer);
