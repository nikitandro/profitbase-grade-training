import { ChangeDetectionStrategy, Component, signal, viewChild, ViewContainerRef } from '@angular/core';
import { Button } from 'primeng/button';
import { HostDirective } from '@app/shared/lib';
import { DividerModule } from 'primeng/divider';
import { type BannerComponent } from '@app/shared';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: 'dynamic-render-page.component.html',
  styleUrls: ['dynamic-render-page.component.scss'],
  imports: [
    Button,
    HostDirective,
    DividerModule,
    InputTextModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicRenderPageComponent {

  protected bannerText = signal('');

  protected hostView = viewChild<HostDirective, ViewContainerRef>(
    HostDirective,
    { read: ViewContainerRef }
  );

  public async loadBanner(text: string): Promise<void> {
    const { BannerComponent } = await import('@app/shared');
    const bannerComponentRef = this.hostView()?.createComponent<BannerComponent>(BannerComponent);
    bannerComponentRef?.setInput('text', text);
  }
}
