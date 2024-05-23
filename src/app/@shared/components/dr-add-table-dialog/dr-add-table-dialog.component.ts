import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITable } from '@core/models/Table';
import { TablesService } from '@core/services/tables.service';
import { UsersService } from '@core/services/users.service';
import { IUser } from '@core/models/User';

@Component({
  selector: 'dr-add-table-dialog',
  templateUrl: './dr-add-table-dialog.component.html',
  styleUrls: ['./dr-add-table-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrAddTableDialogComponent {
  public table: ITable = {
    id: -1,
    fields: [],
    userEmail: '',
    name: ''
  };
  public users: IUser[] = [];
  constructor(
    private tablesService: TablesService,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<DrAddTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data?.table) {
      this.table = {
        ...this.data.table
      }
    }

    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick() {
    if (this.data?.table) {
      this.tablesService.updateTable(this.table).subscribe(res => {
        this.dialogRef.close(res);
      });
    } else {
      this.tablesService.addTable(this.table).subscribe(res => {
        this.dialogRef.close(res);
      });
    }
  }
}
