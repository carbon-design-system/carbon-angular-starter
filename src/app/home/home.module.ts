import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { AccordionModule, TabsModule, TilesModule, GridModule } from "carbon-components-angular";

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		AccordionModule,
		TabsModule,
		TilesModule,
		GridModule
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
