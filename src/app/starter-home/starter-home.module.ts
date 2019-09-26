import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterHomeComponent } from './starter-home/starter-home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

@NgModule({
	imports: [
		CommonModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule
	],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule { }
