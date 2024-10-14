import { Routes } from '@angular/router';
import { InterestSignupComponent } from './interest-signup/interest-signup.component';
import { ServerMaintenanceComponent } from './server-maintenance/server-maintenance.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const routes: Routes = [
    {path: 'interest', component: InterestSignupComponent},
    {path: 'server-maintenance', component: ServerMaintenanceComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: '', redirectTo: '/interest', pathMatch: 'full'},
    {path: '**', redirectTo: '/interest'},
];
