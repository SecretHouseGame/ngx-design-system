import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarSection } from '../../interfaces/navbar';

const ioniconsUrl =
	'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

@Component({
	selector: 'sh-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
	@Input() navbarSections: NavbarSection[] = [];

	isOpened: boolean = true;

	constructor () {
	}

	ngOnInit (): void {
		let node = document.createElement('script');
		node.src = ioniconsUrl;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);

		document.body.classList.add('sidebar-opened')
	}

	toggleSidebar (): void {
		this.isOpened = !this.isOpened;
		document.body.classList.toggle('sidebar-opened')
	}
}
