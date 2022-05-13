import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
	host: {'class': 'field'}
})
export class InputSwitchComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() label: string = '';
	@Input() help: string = '';
  
  isChecked: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
