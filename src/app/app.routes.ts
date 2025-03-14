import { Routes } from '@angular/router';

export const routes: Routes = [
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

];
