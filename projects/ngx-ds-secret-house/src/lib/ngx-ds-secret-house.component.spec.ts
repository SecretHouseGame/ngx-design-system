import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';

describe('NgxDsSecretHouseComponent', () => {
	let component: NgxDsSecretHouseComponent;
	let fixture: ComponentFixture<NgxDsSecretHouseComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NgxDsSecretHouseComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxDsSecretHouseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
