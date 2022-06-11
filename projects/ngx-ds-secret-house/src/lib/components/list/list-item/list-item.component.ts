import { Component, Input, OnInit } from '@angular/core';
import { listItem } from '../../interfaces/list-item';

const ioniconsUrl =
	'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

@Component({
	selector: 'sh-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
	@Input() item: listItem = {
		text: ''
	}
	@Input() disabled: boolean = false;

	constructor () {
	}

	ngOnInit (): void {
		let node = document.createElement('script');
		node.src = ioniconsUrl;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);
	}

}
