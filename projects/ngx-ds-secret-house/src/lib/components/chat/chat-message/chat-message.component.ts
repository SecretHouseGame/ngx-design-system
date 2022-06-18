import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

	@Input() content : string = "";
	@Input() imageUrl ?: string;
	@Input() type : string = "";
	@Input() isCurrentUser : boolean = false;

	isTalking: boolean = false;
	isActing: boolean = false;

	constructor() {

	}

	ngOnInit() {
		if (!this.imageUrl) {
			this.imageUrl = "assets/images/default-pp.jpg"
		}

		if (this.type === "talk") {
			this.isTalking = true;
		} else if (this.type === "acting") {
			this.isActing = true;
			this.content = this.content.replace(/[*]/, "")
			this.content = this.content.substring(0, this.content.length - 1);
		} else {
			this.isTalking = true;
		}
	}
}
