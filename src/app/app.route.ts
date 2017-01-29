import { Routes, RouterModule } from '@angular/router';

import { NotAuthguard } from './not-authguard';
import { LoginComponent } from './login/login.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthguard]
    },
    {
        path: '**',
        redirectTo: '/dashboard/devices'
    }
];


export const routing = RouterModule.forRoot(routes);