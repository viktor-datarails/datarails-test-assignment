import { NgModule } from '@angular/core';
import { DrSidenavComponent } from './components/dr-sidenav/dr-sidenav.component';
import { DrHeaderComponent } from './components/dr-header/dr-header.component';
import { MatButtonModule } from '@angular/material/button';
import { DrSidenavItemComponent } from './components/dr-sidenav-item/dr-sidenav-item.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DrAddUserDialogComponent } from './components/dr-add-user-dialog/dr-add-user-dialog.component';
import { DrAddTableDialogComponent } from './components/dr-add-table-dialog/dr-add-table-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {
  MatDialogModule,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const COMPONENTS = [
  DrHeaderComponent,
  DrSidenavComponent,
  DrSidenavItemComponent,
  DrAddUserDialogComponent,
  DrAddTableDialogComponent
];


const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatAutocompleteModule,
];

@NgModule({
    providers: [],
    imports: [CommonModule, FormsModule, RouterModule, ...ANGULAR_MATERIAL_MODULES],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS, ...ANGULAR_MATERIAL_MODULES],
})
export class SharedModule {}
