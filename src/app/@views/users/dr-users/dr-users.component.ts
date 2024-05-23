import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { IUser } from '@core/models/User';
import { MatDialog } from '@angular/material/dialog';
import { DrAddUserDialogComponent } from '@shared/components/dr-add-user-dialog/dr-add-user-dialog.component';
import { NotificationsService } from '@core/services/notifications.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dr-users',
  templateUrl: './dr-users.component.html',
  styleUrls: ['./dr-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrUsersComponent implements OnInit {

  public readonly displayedColumns: string[] = ['name', 'email', 'actions'];
  public users: IUser[];

  constructor(private usersService: UsersService,
              private notificationsService: NotificationsService,
              private toastr: ToastrService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.notificationsService.on('user').subscribe(event => {
      this.toastr.success(event);
    });
  }

  public editUser(user?: IUser): void {
    const dialogRef = this.dialog.open(DrAddUserDialogComponent, {
      data: {
        user
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.users = result;
    });
  }

  public removeUser(user: IUser) {
    this.usersService.removeUser(user).subscribe(result => {
      this.users = result;
    });
  }
}
