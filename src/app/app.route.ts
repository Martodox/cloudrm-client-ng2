import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { DashboardModule } from './dashboard/dashboard.module';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
];


export const routing = RouterModule.forRoot(routes);