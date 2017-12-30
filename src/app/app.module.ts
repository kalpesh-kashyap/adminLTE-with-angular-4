import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AppRouter} from './app.router';
import {CommonModules} from './common/common.module';
import {MainModule} from './mail/main.module';
import {AuthenticationModule} from './authentications/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    BrowserModule,
    AppRouter,
    CommonModules,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
