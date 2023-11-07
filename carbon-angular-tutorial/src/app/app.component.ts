import { Component, HostBinding } from '@angular/core';

@HostBinding('class.cds--header') const headerClass = true;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carbon-angular-tutorial';
}
