import { registerClass, validateProperty } from '@app/shared';

const moreThanZero = (value: number) => value > 0;

@registerClass
export class Class1 {
  @validateProperty([moreThanZero])
  public a: number = 0;
}
