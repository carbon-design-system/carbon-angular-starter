import { Component } from '@angular/core';
import { IconService } from '@peretz/neutrino';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private topNavBadge = 'Beta';
  private topNavBrand = 'Neutrino';
  private topNavTitle = 'Seed';
  private sideNavOpen = true;

  constructor() {}

  private onClick() {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
