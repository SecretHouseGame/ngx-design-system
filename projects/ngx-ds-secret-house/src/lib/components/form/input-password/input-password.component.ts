import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  host: {'class': 'field'}
})

export class InputPasswordComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() placeholder: string = '';
	@Input() label: string = '';
	@Input() help: string = '';
	
  showPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  triggerPassword(){
    this.showPassword = !this.showPassword;
  }

}
