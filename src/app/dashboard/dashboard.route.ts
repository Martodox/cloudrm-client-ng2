import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authguard } from './authguard';

import { DashboardComponent } from './dashboard.component'
import { DevicesComponent } from './devices/devices.component';
import { SessionResolverService } from './session-resolver.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [Authguard],
    resolve: {
      session: SessionResolverService
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'devices' },
      { path: 'devices', component: DevicesComponent }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
