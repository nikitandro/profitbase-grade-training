import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@app/widgets';
import { DynamicRenderPage } from '@app/pages';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dynamic-render',
        component: DynamicRenderPage,
      }
    ]
  }
];
