import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	constructor() {}

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}
}
