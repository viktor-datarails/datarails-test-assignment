import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';
import { INotification } from '@core/models/Notofication';

@Injectable()
export class NotificationsService {

  private readonly notifications = new Subject<INotification>()

  constructor() {
  }

  send(key: string, value: string) {
    this.notifications.next({ key, value });
  }

  on(event: string): Observable<string> {
    return this.notifications.pipe(
      filter( e => e.key === event),
      map(e => e.value),
    );
  }

}
