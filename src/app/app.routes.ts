import { Routes } from '@angular/router';
import { InterestSignupComponent } from './interest-signup/interest-signup.component';

export const routes: Routes = [
    {path: 'interest', component: InterestSignupComponent},
    {path: '', redirectTo: '/interest', pathMatch: 'full'},
    {path: '**', redirectTo: '/interest'},
];
