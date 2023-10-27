import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	ButtonModule,
	GridModule,
	IconModule,
	IconService,
	ListModule,
	RadioModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

import CarbonBuilder16 from '@carbon/icons/es/carbon--ui-builder/16';

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
		RadioModule,
		ButtonModule,
		IconModule
	],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule {
	constructor(protected iconService: IconService) {
		iconService.register(CarbonBuilder16);
	}
}
