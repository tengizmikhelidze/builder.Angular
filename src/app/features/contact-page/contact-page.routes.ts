import {Routes} from '@angular/router';
import {ContactPageComponent} from './contact-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContactPageComponent
  }
];
