import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() link:string = "https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png";
  @Input() avatarAlt:string = "Avatar Icon";

  constructor() { }

  ngOnInit(): void {
  }

}
