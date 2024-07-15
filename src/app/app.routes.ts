import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  },
];
  