import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@app/widgets';
import { DynamicRenderPageComponent, PatternsPageComponent } from '@app/pages';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dynamic-render',
        component: DynamicRenderPageComponent,
      },
      {
        path: 'patterns',
        children: [
          {
            path: 'decorator',
            component: PatternsPageComponent
          }
        ]
      }
    ]
  }
];
