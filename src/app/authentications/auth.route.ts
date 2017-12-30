import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UnauthGuard} from './unauth.guard';

const router: Routes = [
  {path: 'login' , component: LoginComponent, canActivate:[UnauthGuard] },
  {path: 'Register', component: RegisterComponent, canActivate:[UnauthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})

export class AuthRoute {

}
