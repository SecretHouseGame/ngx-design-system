import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sh-navbar-link',
	templateUrl: './navbar-link.component.html',
	styleUrls: ['./navbar-link.component.scss'],
})
export class NavbarLinkComponent implements OnInit {
	@Input() title: string = '';
	@Input() icon: string = '';
	@Input() isActive: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
