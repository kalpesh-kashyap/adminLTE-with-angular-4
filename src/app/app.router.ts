import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersListComponent} from './users-list/users-list.component';
const router: Routes = [
  {path: '', component:UsersListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component:UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRouter {

}
