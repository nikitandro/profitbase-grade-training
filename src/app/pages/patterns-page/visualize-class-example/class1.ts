import { emailValidator, registerClass } from '@app/shared';

@registerClass
export class Class1 {
  @emailValidator
  public email: string;

  constructor(email: string) {
    this.email = email;
  }
}
