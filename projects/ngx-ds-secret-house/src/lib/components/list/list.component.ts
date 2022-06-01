import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sh-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	@Input() title: string = '';

	constructor () {
	}

	ngOnInit (): void {
	}

}
