import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'sh-field-container',
	templateUrl: './field-container.component.html',
	styleUrls: ['./field-container.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FieldContainerComponent implements OnInit {
	@Input() label: string = "";
	@Input() for: string = "";
	@Input() help: string = "";
	error: boolean = false;
	success: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
