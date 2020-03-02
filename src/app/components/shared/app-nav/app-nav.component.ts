import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {Router} from '@angular/router';
import {IsOnlineStoreService} from '../../../services/is-online-store.service';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isOnline = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private onlineStatusStoreService: IsOnlineStoreService,
    private router: Router
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

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
