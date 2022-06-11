import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
	@Input() name: string = '';
	@Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
