import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authguard } from './authguard';

import { DashboardComponent } from './dashboard.component'
import { DevicesComponent } from './devices/devices.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [Authguard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'devices' },
      { path: 'devices', component: DevicesComponent },
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
