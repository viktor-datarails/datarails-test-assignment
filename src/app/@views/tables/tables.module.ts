import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrTablesComponent } from './dr-tables/dr-tables.component';
import { DrFieldsComponent } from './dr-fields/dr-fields.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DrTablesComponent,
  },
  {
    path: ':id',
    component: DrFieldsComponent,
  },
];

@NgModule({
  declarations: [
    DrTablesComponent,
    DrFieldsComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  providers: [],
})
export class TablesModule {}
