import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: 'app-layout.component.html',
  styleUrls: ['app-layout.component.scss'],
  imports: [
    RouterOutlet,
    Button,
    RouterLink,
    MenubarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {
  protected readonly menuItems: MenuItem[] = [
    {
      label: 'Dynamic Render',
      routerLink: 'dynamic-render'
    },
    {
      label: 'Patterns',
      items: [
        {
          label: 'Decorator',
          routerLink: 'patterns/decorator',
        }
      ]
    },
    {
      label: 'Animations',
      routerLink: 'animations'
    }
  ];
}
