import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() icon: boolean = false;
  @Input() text: string = '';
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
