import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

@Component({
	selector: "app-root",
	encapsulation: ViewEncapsulation.None,
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	@ViewChild("container") container;

	onWhiteChange() {
		this.container.nativeElement.classList.add("carbon--theme--white");
		this.container.nativeElement.classList.remove("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--g90");
	}
	onG10Change() {
		this.container.nativeElement.classList.add("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--white");
		this.container.nativeElement.classList.remove("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--g90");
	}
	onG100Change() {
		this.container.nativeElement.classList.add("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--white");
		this.container.nativeElement.classList.remove("carbon--theme--g90");
	}
	onG90Change() {
		this.container.nativeElement.classList.add("carbon--theme--g90");
		this.container.nativeElement.classList.remove("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--white");
	}
}
