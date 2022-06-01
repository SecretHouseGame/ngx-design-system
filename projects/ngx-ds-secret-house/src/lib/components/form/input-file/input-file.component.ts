import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'sh-input-file',
	templateUrl: './input-file.component.html',
	styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() name: string = '';
	@Input() label: string = '';
	@Input() help: string = '';
	@Input() state: 'none' | 'preview' | 'uploading' | 'failed-upload' | 'failed-type';
	@Input() path: SafeUrl = 'https://picsum.photos/seed/picsum/200/300';
	@Input() acceptedImageTypes: Array<string> = ['image/gif', 'image/jpeg', 'image/png'];

	constructor(private sanitizer:DomSanitizer) {
		this.state = 'none';
	}

	sanitize(url:string){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

	onFileSelected(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			this.state = 'uploading';
			let file = target.files[0];

			if(file && this.acceptedImageTypes.includes(file['type'])){
				let filepath = this.sanitize( URL.createObjectURL(file) );
				this.path = filepath;
				this.state = 'preview';
			} else {
				// Type non autorisé
				this.state = 'failed-type';
			}
			
		}
	 }

	ngOnInit(): void {

	}

}
