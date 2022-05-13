import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sh-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() color: string = 'default';
	@Input() outline: boolean = false;
	@Input() disabled: boolean = false;

	constructor () {
	}

	ngOnInit (): void {
	}

}
