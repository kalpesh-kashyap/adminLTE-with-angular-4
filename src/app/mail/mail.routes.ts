import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MailComponentComponent} from './mail-component/mail-component.component';
import {UsersListComponent} from './users-list/users-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../authentications/auth.guard';

const router: Routes = [
  {
    path: '',
    component: MailComponentComponent,
    canActivate: [AuthGuard],

    children: [
      {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
      {path: 'usersList', canActivate: [AuthGuard], component: UsersListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})

export class MailRoutes {

}
