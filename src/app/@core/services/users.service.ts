import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '@core/models/User';
import { NotificationsService } from '@core/services/notifications.service';

@Injectable()
export class UsersService {
  private STORAGE_KEY = 'drTestUsers';
  private usersFromStorage = localStorage.getItem(this.STORAGE_KEY);
  private users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>(this.usersFromStorage ? JSON.parse(this.usersFromStorage) : []);

  constructor(private notificationsService: NotificationsService) {
  }

  public getUsers(): Observable<IUser[]> {
    return this.users$.asObservable();
  }

  public addUser(user: IUser): Observable<IUser[]> {
    this.users$.next([
      ...this.users$.getValue(),
      user
    ]);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users$.getValue()));
    setTimeout(() => this.notificationsService.send('user', `Table ${ user.name } was added`), 500);

    return this.users$.asObservable();
  }

  public removeUser(user: IUser): Observable<IUser[]> {
    const filteredUsers = this.users$.getValue().filter(t => t.email !== user.email);
    this.users$.next(filteredUsers);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredUsers));
    setTimeout(() => this.notificationsService.send('user', `Table ${ user.name } was removed`), 500);

    return this.users$.asObservable();
  }

  public updateUser(user: IUser): Observable<IUser[]> {
    const updatedUsers = this.users$.getValue().map(t => {
      return t.email === user.email ? ({
        ...t,
        ...user
      } as IUser) : t;
    });
    this.users$.next(updatedUsers);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedUsers));
    setTimeout(() => this.notificationsService.send('user', `Table ${ user.name } was updated`), 500);

    return this.users$.asObservable();
  }
}
