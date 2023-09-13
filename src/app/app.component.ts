import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public text = ' Time to learn Angular ' + VERSION.major;
  protected routeToGo: string = 'post-list';
}
