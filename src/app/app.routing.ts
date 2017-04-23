import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
