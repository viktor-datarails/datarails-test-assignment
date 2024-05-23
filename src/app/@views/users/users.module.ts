import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrUsersComponent } from './dr-users/dr-users.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DrUsersComponent,
  },
];

@NgModule({
  declarations: [
    DrUsersComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  providers: [],
})
export class UsersModule {}
