import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() text: string = '';
  @Input() position: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
