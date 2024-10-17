import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
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
    path: 'about-us',
    loadComponent: () =>
      import('./about-us/about-us.component').then((c) => c.AboutUsComponent),
  },
  {
    path: 'logo',
    loadComponent: () =>
      import('./logo/logo.component').then((c) => c.LogoComponent),
  },
  { path: '', redirectTo: '/contact-us', pathMatch: 'full' },
  { path: '**', redirectTo: '/contact-us' },
];
