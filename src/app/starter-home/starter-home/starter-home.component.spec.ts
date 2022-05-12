import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StarterHomeComponent } from './starter-home.component';

import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

describe('HomeComponent', () => {
	let component: StarterHomeComponent;
	let fixture: ComponentFixture<StarterHomeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				GridModule,
				ListModule,
				TabsModule,
				TilesModule
			],
			declarations: [ StarterHomeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StarterHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
