import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() content: string = "Content";
  @Input() type: string = "info";
  
  constructor() { }

  ngOnInit(): void {
  }

}
