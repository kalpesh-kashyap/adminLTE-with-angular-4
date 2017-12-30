import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthRoute} from './auth.route';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {UnauthGuard} from './unauth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoute
  ],
  providers:[
    AuthService,
    AuthGuard,
    UnauthGuard
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],

})

export class AuthenticationModule {

}
