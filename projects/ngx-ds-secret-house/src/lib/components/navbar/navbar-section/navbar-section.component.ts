import { Component, Input, OnInit } from '@angular/core';
import { NavbarLink } from '../../../interfaces/navbar';

@Component({
  selector: 'sh-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss']
})
export class NavbarSectionComponent implements OnInit {
	@Input() title: string = '';
	@Input() elements: NavbarLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
