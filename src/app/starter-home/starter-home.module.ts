import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	GridModule,
	ListModule,
	RadioModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

import { StarterHomeComponent } from './starter-home/starter-home.component';
import { StarterHomeRoutingModule } from './starter-home-routing.module';

@NgModule({
	imports: [
		CommonModule,
		StarterHomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		RadioModule
	],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule { }
