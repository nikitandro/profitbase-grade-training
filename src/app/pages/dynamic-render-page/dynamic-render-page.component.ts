import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: 'dynamic-render-page.component.html',
  styleUrls: ['dynamic-render-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicRenderPage {

}
