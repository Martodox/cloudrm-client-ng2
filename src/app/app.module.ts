import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route'
import { HttpClient } from '../api/HttpClient';
import { DashboardModule } from './dashboard/dashboard.module';

import { SessionApi } from '../api/SessionApi'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DashboardModule
  ],
  providers: [
    HttpClient,
    SessionApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
