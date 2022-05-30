import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckboxOption } from '../../interfaces/checkbox-option';

@Component({
  selector: 'sh-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() name: string = '';
	@Input() label: string = '';
	@Input() help: string = '';
	@Input() options: CheckboxOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
