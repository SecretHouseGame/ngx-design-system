import { Component, Input, OnInit } from '@angular/core';

const ioniconsUrl =
	'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

@Component({
	selector: 'sh-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() color: string = 'default';
	@Input() outline: boolean = false;
	@Input() disabled: boolean = false;
	@Input() loading: boolean = false;

	constructor () {
	}

	ngOnInit (): void {
		let node = document.createElement('script');
		node.src = ioniconsUrl;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);
	}
}
