import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  host: {'class': 'field'}
})

export class InputTextComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() placeholder: string = '';
	@Input() label: string = '';
	@Input() help: string = '';
	@Input() error: boolean = false;
	@Input() success: boolean = false;
	@Input() disabled: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
