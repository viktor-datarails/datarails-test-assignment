import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITable } from '@core/models/Table';
import { NotificationsService } from '@core/services/notifications.service';

@Injectable()
export class TablesService {
  private STORAGE_KEY = 'drTestTables';
  private tablesFromStorage = localStorage.getItem(this.STORAGE_KEY);
  private tables$: BehaviorSubject<ITable[]> = new BehaviorSubject<ITable[]>(this.tablesFromStorage ? JSON.parse(this.tablesFromStorage) : []);

  constructor(private notificationsService: NotificationsService) {
  }

  public getTables(): Observable<ITable[]> {
    return this.tables$.asObservable();
  }

  public addTable(table: ITable): Observable<ITable[]> {
    this.tables$.next([
      ...this.tables$.getValue(),
      {
        ...table,
        id: Date.now()
      }
    ]);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tables$.getValue()));
    setTimeout(() => this.notificationsService.send('table', `Table ${ table.name } was added`), 500);

    return this.tables$.asObservable();
  }

  public removeTable(table: ITable): Observable<ITable[]> {
    const filteredTables = this.tables$.getValue().filter(t => t.name !== table.name);
    this.tables$.next(filteredTables);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredTables));
    setTimeout(() => this.notificationsService.send('table', `Table ${ table.name } was removed`), 500);

    return this.tables$.asObservable();
  }

  public updateTable(table: ITable): Observable<ITable[]> {
    const updatedTables = this.tables$.getValue().map(t => {
      return t.id === table.id ? ({
        ...t,
        ...table,
        lastUpdateTime: Date.now(),
      } as ITable) : t;
    });
    this.tables$.next(updatedTables);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedTables));
    setTimeout(() => this.notificationsService.send('table', `Table ${ table.name } was updated`), 500);

    return this.tables$.asObservable();
  }
}
