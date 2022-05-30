import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RadioOption } from '../../interfaces/radio-option';

@Component({
  selector: 'sh-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() name: string = '';
	@Input() legend: string = '';
	@Input() help: string = '';
	@Input() options: RadioOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
