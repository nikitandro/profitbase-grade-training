import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { animate, state, style, transition, trigger, } from '@angular/animations';

@Component({
  selector: 'app-animations-page',
  styleUrls: ['./animations-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './animations-page.component.html',
  standalone: true,
  imports: [
    MessageModule,
  ],
  animations: [
    trigger('rotate', [
      state('initial', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition(
        '* => *',
        animate('0.3s ease')
      )
    ]),
    trigger('bounce', [
      state('initial', style({ scale: '1' })),
      state('bounced', style({ scale: '1.2' })),
      transition(
        '* => *',
        animate('0.2s ease')
      )
    ]),
    trigger('hide', [
      state('initial', style({})),
      state('hidden', style({ scale: 0 })),
      transition('* => *', animate('0.3s ease')),
    ])
  ],
})
export class AnimationsPageComponent {
  protected readonly block1State = signal<string>('initial');
  protected readonly block2State = signal<string>('initial');
  protected readonly block3State = signal<string>('initial');

  protected rotateBlock1(): void {
    this.block1State.set(this.block1State() === 'initial' ? 'rotated' : 'initial');
  }

  protected bounceBlock2(): void {
    this.block2State.set(this.block2State() === 'initial' ? 'bounced' : 'initial');
  }

  protected hideBlock3(): void {
    this.block3State.set(this.block3State() === 'initial' ? 'hidden' : 'initial');
  }
}
