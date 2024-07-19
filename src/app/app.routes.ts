import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesCorouselComponent } from './components/corousels/movies-corousel/movies-corousel.component';

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
  