import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { IconModule, IconService, UIShellModule } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		IconModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Notification20,
			UserAvatar20,
			AppSwitcher20
		]);
	}
}
