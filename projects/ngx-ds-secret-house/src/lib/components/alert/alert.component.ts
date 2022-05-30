import { Component,Input, OnInit } from '@angular/core';

const ioniconsUrl =
    'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';


@Component({
  selector: 'sh-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() content: string = "Content";
  @Input() type: string = "info";
  
  constructor() { }

  ngOnInit(): void {
  }

}
