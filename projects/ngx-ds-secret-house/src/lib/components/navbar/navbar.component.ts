import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
	navbarSections: NavbarSection[] = [
		{
			title: 'La maison des secrets',
			elements: [
				{
					title: 'Habitants',
					icon: 'people-outline',
					isActive: false,
					url: '/habitants',
				},
				{
					title: 'Rooms',
					icon: 'home-outline',
					isActive: false,
					url: '/rooms',
				},
				{
					title: 'Buzz',
					icon: 'hand-left-outline',
					isActive: false,
					url: '/buzz',
				},
				{
					title: 'Secrets',
					icon: 'eye-outline',
					isActive: false,
					url: '/secrets',
				},
			],
		},
		{
			title: 'Le prime',
			elements: [
				{
					title: 'Nominations',
					icon: 'megaphone-outline',
					isActive: false,
					url: '/nominations',
				},
				{
					title: 'Pépites de la semaine',
					icon: 'diamond-outline',
					isActive: false,
					url: '/pepites',
				},
				{
					title: 'Éliminations',
					icon: 'skull-outline',
					isActive: false,
					url: '/eliminations',
				},
			],
		},
		{
			title: 'Mon profil',
			elements: [
				{
					title: 'Mon personnage',
					icon: 'happy-outline',
					isActive: false,
					url: '/mon-personnage',
				},
				{
					title: 'Mon compte',
					icon: 'person-outline',
					isActive: false,
					url: '/mon-compte',
				},
				{
					title: 'Paramètres',
					icon: 'settings-outline',
					isActive: false,
					url: '/parametres',
				},
			],
		},
		{
			title: 'Aide',
			elements: [
				{
					title: 'Règles du jeu',
					icon: 'information-circle-outline',
					isActive: false,
					url: '/regles',
				},
				{
					title: 'FAQ',
					icon: 'help-circle-outline',
					isActive: false,
					url: '/faq',
				},
				{
					title: 'Contacter un admin',
					icon: 'chatbubble-ellipses-outline',
					isActive: false,
					url: '/contacter-admin',
				},
			],
		},
	];

	isOpened: boolean = false;

	constructor () {
	}

	ngOnInit (): void {
		let node = document.createElement('script');
		node.src = ioniconsUrl;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);
	}

	toggleSidebar (): void {
		this.isOpened = !this.isOpened;
	}
}
