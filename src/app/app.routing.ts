import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";

const APP_ROUTES: Routes = [
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	}
];

export { APP_ROUTES };
