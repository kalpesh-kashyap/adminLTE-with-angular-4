import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './authentications/auth.guard';

const router: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch:'full' , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRouter {

}
