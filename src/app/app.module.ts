import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouter} from './app.router';
import {CommonModules} from './common/common.module';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    CommonModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
