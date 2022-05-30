import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() name: string = '';
	@Input() label: string = '';
	@Input() help: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
