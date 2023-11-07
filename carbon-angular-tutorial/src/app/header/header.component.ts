import { IconService } from "carbon-components-angular";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(protected iconService: IconService) {
    // Constructor
  }
  ngOnInit() {
    // This method will be executed when the component is initialized
    this.iconService.registerAll([Notification20]);
  }
}
