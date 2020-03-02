import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsOnlineStoreService} from '../../../services/is-online-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isOnline = true;

  constructor(
    private onlineStatusStoreService: IsOnlineStoreService
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(this.onlineStatusStoreService.status.subscribe(status => {
      this.isOnline = status;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
