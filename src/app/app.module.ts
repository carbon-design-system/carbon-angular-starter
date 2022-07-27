import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular
import {
	GridModule,
	IconModule,
	IconService,
	UIShellModule
} from 'carbon-components-angular';

// @carbon/icons
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import Apps16 from '@carbon/icons/es/apps/16';

// pages
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SupportComponent } from './pages/support/support.component';
import { Link1Component } from './pages/link1/link1.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CatalogComponent,
		DocsComponent,
		SupportComponent,
		Link1Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IconModule,
		UIShellModule,
		GridModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([Notification16, UserAvatar16, Apps16]);
	}
}
