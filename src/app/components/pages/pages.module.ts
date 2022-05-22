import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    HomeComponent,
    ListUsersComponent,
    UserDetailComponent,
    PagesComponent,
    ErrorComponent
  ],
  exports: [
    HomeComponent,
    ListUsersComponent,
    UserDetailComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }
