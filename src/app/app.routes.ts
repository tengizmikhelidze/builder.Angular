import { Routes } from '@angular/router';

const featureRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home-page/home-page.routes').then(
        (m) => m.routes
      )
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home' }

]

export const routes: Routes = [
  {
    path: 'ka',
    children: featureRoutes
  },
  {
    path: 'en',
    children: featureRoutes
  },
  {
    path: '',
    redirectTo: '/ka',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/ka' }

];
