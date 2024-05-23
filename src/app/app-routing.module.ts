import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./@views/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'tables',
    loadChildren: () => import('./@views/tables/tables.module').then((m) => m.TablesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
