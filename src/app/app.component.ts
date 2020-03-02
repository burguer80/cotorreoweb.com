import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {IsOnlineStoreService} from './services/is-online-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isRouterOutletActive = false;

  constructor(private onlineStatusStoreService: IsOnlineStoreService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.onlineStatusStoreService.onlineEvent.subscribe(event => {
      this.onlineStatusStoreService.setOnline();
    }));
    this.subscriptions.push(this.onlineStatusStoreService.offlineEvent.subscribe(e => {
      this.onlineStatusStoreService.setOffline();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onRouterOutletActivate(event: any): void {
    this.isRouterOutletActive = true;
  }
}
