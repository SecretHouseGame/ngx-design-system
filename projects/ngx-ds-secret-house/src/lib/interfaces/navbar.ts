export interface NavbarSection {
	title: string;
	elements: NavbarLink[];
}

export interface NavbarLink {
	title: string;
	icon: string;
	url: string;
	isActive: boolean;
}
