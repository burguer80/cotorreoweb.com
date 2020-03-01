import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRouterOutletActive = false;

  public onRouterOutletActivate(event: any): void {
    this.isRouterOutletActive = true;
  }
}
