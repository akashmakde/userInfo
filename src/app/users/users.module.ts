import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [UsersComponent, AddUserComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    UsersRoutingModule,SharedModule
  ]
})
export class UsersModule { }
