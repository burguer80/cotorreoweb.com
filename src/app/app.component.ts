import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRouterOutletActive = false;

  constructor() {
  }

  onRouterOutletActivate(event: any): void {
    this.isRouterOutletActive = true;
  }
}
