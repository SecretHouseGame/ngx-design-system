import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-chat-announcement',
  templateUrl: './chat-announcement.html',
  styleUrls: ['./chat-announcement.component.scss']
})
export class ChatAnnouncementComponent implements OnInit {

	@Input() type: string = "";
	@Input() targetName: string = "";
	@Input() dare: string = "";
	@Input() cashPrize: string = "";
	@Input() secret: string = "";
	@Input() content: string = "";

	isAnnouncement: boolean = false;
	isDare: boolean = false;
	isVote: boolean = false;
	isElimination: boolean = false;

	constructor() { }

	ngOnInit(): void {
		if (this.type === "announcement") {
			this.isAnnouncement = true;
		} else if (this.type === "dare") {
			this.isDare = true;
		} else if (this.type === "vote") {
			this.isVote = true;
		} else if (this.type === "elimination") {
			this.isElimination = true;
		} else {
			this.isAnnouncement = true;
		}

		if (this.targetName !== "") {
			this.targetName = this.targetName.charAt(0).toUpperCase() + this.targetName.slice(1);
		}
	}

}
