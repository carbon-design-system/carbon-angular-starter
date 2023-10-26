import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, inject } from '@angular/core';

@Component({
	selector: 'app-starter-home',
	templateUrl: './starter-home.component.html',
	styleUrls: ['./starter-home.component.scss']
})
export class StarterHomeComponent implements OnInit {

	theme: string = 'white';

	private document = inject(DOCUMENT);
	private renderer = inject(Renderer2);

	ngOnInit() {
		// Apply default class to body
		this.renderer.addClass(this.document.body, this.theme);
	}

	onThemeChange({ value }) {
		// Remove current assigned class then add updated class
		this.renderer.removeClass(this.document.body, this.theme);
		this.theme = value;
		this.renderer.addClass(this.document.body, this.theme);
	}
}
