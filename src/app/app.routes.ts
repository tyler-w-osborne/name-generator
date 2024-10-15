import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'interest',
    loadComponent: () =>
      import('./interest-signup/interest-signup.component').then(
        (c) => c.InterestSignupComponent
      ),
  },
  {
    path: 'server-maintenance',
    loadComponent: () =>
      import('./server-maintenance/server-maintenance.component').then(
        (c) => c.ServerMaintenanceComponent
      ),
  },
  {
    path: 'coming-soon',
    loadComponent: () =>
      import('./coming-soon/coming-soon.component').then(
        (c) => c.ComingSoonComponent
      ),
  },
  {
    path: 'logo',
    loadComponent: () =>
      import('./logo/logo.component').then((c) => c.LogoComponent),
  },
  { path: '', redirectTo: '/interest', pathMatch: 'full' },
  { path: '**', redirectTo: '/interest' },
];
