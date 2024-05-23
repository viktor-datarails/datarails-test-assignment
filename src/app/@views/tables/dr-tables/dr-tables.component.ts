import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TablesService } from '@core/services/tables.service';
import { ITable } from '@core/models/Table';
import { DrAddTableDialogComponent } from '@shared/components/dr-add-table-dialog/dr-add-table-dialog.component';
import { NotificationsService } from '@core/services/notifications.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dr-tables',
  templateUrl: './dr-tables.component.html',
  styleUrls: ['./dr-tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrTablesComponent  implements OnInit {
  public readonly displayedColumns: string[] = ['id', 'name', 'userEmail', 'fieldsCount', 'lastUpdateTime', 'actions'];
  public tables: ITable[];

  constructor(private tablesService: TablesService,
              private notificationsService: NotificationsService,
              private toastr: ToastrService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tablesService.getTables().subscribe(tables => {
      this.tables = tables;
    });

    this.notificationsService.on('table').subscribe(event => {
      this.toastr.success(event);
    });
  }

  public editTable(table?: ITable): void {
    const dialogRef = this.dialog.open(DrAddTableDialogComponent, {
      data: {
        table
      },
    });

    dialogRef.afterClosed().subscribe(tables => {
      this.tables = tables;
    });
  }

  public removeTable(table: ITable) {
    this.tablesService.removeTable(table).subscribe(result => {
      this.tables = result;
    });
  }
}
