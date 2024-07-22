import { ChangeDetectionStrategy, Component, viewChild, ViewContainerRef } from '@angular/core';
import { Button } from 'primeng/button';
import { HostDirective } from '@app/shared/lib';
import { DividerModule } from 'primeng/divider';

@Component({
  standalone: true,
  templateUrl: 'dynamic-render-page.component.html',
  styleUrls: ['dynamic-render-page.component.scss'],
  imports: [
    Button,
    HostDirective,
    DividerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicRenderPage {

  protected hostView = viewChild<HostDirective, ViewContainerRef>(HostDirective, { read: ViewContainerRef });

  public async loadBanner(): Promise<void> {
    const { BannerComponent } = await import('@app/shared');
    this.hostView()?.createComponent(BannerComponent);
  }
}
