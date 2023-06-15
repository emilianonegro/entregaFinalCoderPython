import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { CoreModule } from '../_shared/core/core.module';


@NgModule({
  declarations: [
    ViewUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule
  ]
})
export class UsersModule { }
