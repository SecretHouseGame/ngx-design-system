import { TestBed } from '@angular/core/testing';

import { NgxDsSecretHouseService } from './ngx-ds-secret-house.service';

describe('NgxDsSecretHouseService', () => {
	let service: NgxDsSecretHouseService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NgxDsSecretHouseService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
