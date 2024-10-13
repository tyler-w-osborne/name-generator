import { Routes } from '@angular/router';
import { InterestSignupComponent } from './interest-signup/interest-signup.component';
import { ServerMaintenanceComponent } from './server-maintenance/server-maintenance.component';

export const routes: Routes = [
    {path: 'interest', component: InterestSignupComponent},
    {path: 'server-maintenance', component: ServerMaintenanceComponent},
    {path: '', redirectTo: '/interest', pathMatch: 'full'},
    {path: '**', redirectTo: '/interest'},
];
