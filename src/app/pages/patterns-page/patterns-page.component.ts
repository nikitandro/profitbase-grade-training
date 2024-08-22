import { ChangeDetectionStrategy, Component, Inject, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CLASS_REGISTRY_TOKEN } from '@app/app/di/class-registry';
import { IClassRegistry, MathOperations } from '@app/shared';
import { Class1 } from './visualize-class-example';
import { InputNumberInputEvent, InputNumberModule } from 'primeng/inputnumber';

@Component({
  standalone: true,
  templateUrl: 'patterns-page.component.html',
  imports: [
    InputTextModule,
    InputNumberModule,
  ],
  styleUrls: ['patterns-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternsPageComponent {

  protected fibonacci = signal<number | null>(null);

  constructor(@Inject(CLASS_REGISTRY_TOKEN) private classRegistry: IClassRegistry) {
    const class1 = new Class1();
    console.log(this.classRegistry.getMembers());
    class1.a = -1;
  }

  protected onInputChange(event: InputNumberInputEvent): void {
    const value = Number(event.value);
    if (Number.isNaN(value)) {
      return;
    }
    this.fibonacci.set(MathOperations.calculateFibonacci(value));
  }
}
