import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsOnlineStoreService {
  offlineEvent: Observable<Event> = fromEvent(window, 'offline');
  onlineEvent: Observable<Event> = fromEvent(window, 'online');
  private isOnline = new BehaviorSubject<boolean>(true);
  status: Observable<boolean> = this.isOnline.asObservable();

  constructor() {
  }

  setOffline() {
    this.updateIsOnlineStatus(false);
  }

  setOnline() {
    this.updateIsOnlineStatus(true);
  }

  private updateIsOnlineStatus(status: boolean) {
    this.isOnline.next(status);
  }
}
