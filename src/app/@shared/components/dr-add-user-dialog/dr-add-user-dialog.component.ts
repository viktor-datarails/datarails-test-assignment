import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '@core/models/User';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'dr-add-user-dialog',
  templateUrl: './dr-add-user-dialog.component.html',
  styleUrls: ['./dr-add-user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrAddUserDialogComponent {

  public user: IUser = {
    name: '',
    email: '',
  };
  constructor(
    private usersService: UsersService,
    private dialogRef: MatDialogRef<DrAddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data?.user) {
      this.user = {
        ...this.data.user
      }
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick() {
    if (this.data?.user) {
      this.usersService.updateUser(this.user).subscribe(res => {
        this.dialogRef.close(res);
      });
    } else {
      this.usersService.addUser(this.user).subscribe(res => {
        this.dialogRef.close(res);
      });
    }
  }
}
