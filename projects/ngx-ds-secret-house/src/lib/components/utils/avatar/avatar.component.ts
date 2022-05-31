import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() link?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
