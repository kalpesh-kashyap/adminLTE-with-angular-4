import {NgModule} from '@angular/core';
import {CommonModules} from '../common/common.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersListComponent} from './users-list/users-list.component';
import {MailComponentComponent} from './mail-component/mail-component.component';
import {MailRoutes} from './mail.routes';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent,
    MailComponentComponent,
  ],
  imports: [
    CommonModules,
    MailRoutes,
  ],
  providers: [],

})
export class MainModule {
}
