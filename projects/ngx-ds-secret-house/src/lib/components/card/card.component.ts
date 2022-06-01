import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sh-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() id: string = '';
	@Input() class: string = '';

	constructor () {
	}

	ngOnInit (): void {
	}

}
