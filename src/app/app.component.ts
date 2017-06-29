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
  private demoItems = [
  {
    content: 'Understand',
    selected: false,
    icon: 'alert',
    items: [
      {
        content: 'Experience integrations',
        selected: false,
        items: [
          {
            content: 'Experience integrations',
            selected: false
          },
          {
            content: 'Predictive custom intelligence',
            selected: false
          },
        ]
      },
      {
        content: 'Predictive custom intelligence',
        selected: false
      },
    ]
  },
  {
    content: 'Plan',
    selected: false,
    icon: 'alert'
  },
  {
    content: 'Design',
    selected: false,
    icon: 'alert'
  },
  {
    content: 'Build',
    selected: false,
    icon: 'alert'

  },
  {
    content: 'Listen',
    selected: false,
    icon: 'alert'

  },
  {
    content: 'Optimize',
    selected: false,
    icon: 'alert'

  }];

  private demoItems2 = this.clone(this.demoItems);
  private demoItems3 = this.clone(this.demoItems);
  private demoItems4 = this.clone(this.demoItems);

  private clone (el) {
    return JSON.parse(JSON.stringify(el));
  }

  constructor() {}

  private onClick() {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
