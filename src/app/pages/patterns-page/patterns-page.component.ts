import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CLASS_REGISTRY_TOKEN } from '@app/app/di/class-registry';
import { IClassRegistry } from '@app/shared';
import { Class1 } from './visualize-class-example';

@Component({
  standalone: true,
  templateUrl: 'patterns-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InputTextModule,
  ],
  styleUrls: ['patterns-page.component.scss'],
})
export class PatternsPageComponent {

  constructor(@Inject(CLASS_REGISTRY_TOKEN) private classRegistry: IClassRegistry) {
    const class1 = new Class1();
    console.log(this.classRegistry.getMembers());
  }
}
