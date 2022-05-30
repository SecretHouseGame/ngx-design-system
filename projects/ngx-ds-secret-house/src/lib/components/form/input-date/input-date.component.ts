import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
	@Input() control!: FormControl;
	@Input() name: string = '';
	@Input() label: string = '';
	@Input() help: string = '';
	@Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
