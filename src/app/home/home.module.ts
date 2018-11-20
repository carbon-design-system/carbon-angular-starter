import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { AccordionModule, ButtonModule, TabsModule } from "carbon-components-angular";

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		AccordionModule,
		ButtonModule,
		TabsModule
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
