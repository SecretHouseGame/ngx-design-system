import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'sh-btn-primary',
	templateUrl: './btn-primary.component.html',
	styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {
	@Input() disabled: boolean = false;

	constructor () {
	}

	ngOnInit (): void {
	}
}
