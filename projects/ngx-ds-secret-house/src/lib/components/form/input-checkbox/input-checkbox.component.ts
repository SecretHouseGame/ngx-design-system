import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckboxOption } from '../../interfaces/checkbox-option';

const ioniconsUrl =
	'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

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

	constructor () {
	}

	ngOnInit (): void {
		let node = document.createElement('script');
		node.src = ioniconsUrl;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);
	}

}
