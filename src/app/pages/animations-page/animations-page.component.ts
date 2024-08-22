import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-animations-page',
  styleUrls: ['./animations-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './animations-page.component.html',
  standalone: true,
  imports: [
    MessageModule,
  ],
})
export class AnimationsPageComponent {

}
