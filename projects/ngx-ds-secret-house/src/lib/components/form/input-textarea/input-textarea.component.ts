import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'sh-input-textarea',
	templateUrl: './input-textarea.component.html',
	styleUrls: ['./input-textarea.component.scss'],
	host: {'class': 'field'}
})
export class InputTextareaComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() label: string = '';
	@Input() placeholder: string = '';
	@Input() help: string = '';
	@Input() error: boolean = false;
	@Input() success: boolean = false;
	@Input() disabled: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
