import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sh-button-action',
	templateUrl: './button-action.component.html',
	styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {
	@Input() type: string = '';
	@Input() icon: string = '';
	@Input() disabled: boolean = false;
	@Input() loading: boolean = false;

	constructor () {
	}

	ngOnInit (): void {
	}

}
