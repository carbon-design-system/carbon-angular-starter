import { Component } from '@angular/core';
import { IconService } from '@neutrino/neutrino';

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

  constructor() {
    // by default IconService looks them up locally
    IconService.setIconUrl('http://csx00509.canlab.ibm.com/icons/');
  }

  private onClick() {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
