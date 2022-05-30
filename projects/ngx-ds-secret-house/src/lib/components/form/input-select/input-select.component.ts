import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'sh-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
	host: {'class': 'field'}
})
export class InputSelectComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() label: string = '';
	@Input() options: SelectOption[] = [];
	@Input() help: string = '';

	constructor() {}

	ngOnInit(): void {}
}
