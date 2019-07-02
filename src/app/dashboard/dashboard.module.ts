import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {MomentModule} from 'ngx-moment';
import {MatTabsModule} from '@angular/material/tabs';
import {LoadingUsersComponent} from './loading-users/loading-users.component';
import {SettingsComponent} from './settings/settings.component';
import {MessagesComponent} from './messages/messages.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  declarations: [UsersComponent, SidebarComponent, LoadingUsersComponent, SettingsComponent, MessagesComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    HttpClientModule,
    MomentModule.forRoot()
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule {
}
