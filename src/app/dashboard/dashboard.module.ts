import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DevicesComponent } from './devices/devices.component';
import { DashboardComponent } from './dashboard.component';
import { Authguard } from './authguard';
import { dashboardRouting } from './dashboard.route';
import { SessionResolverService } from './session-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [
    NavigationComponent,
    DevicesComponent,
    DashboardComponent
  ],
  providers: [
    Authguard,
    SessionResolverService
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
