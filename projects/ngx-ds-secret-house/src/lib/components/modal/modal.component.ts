import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService, ModalState } from '../../services/modal.service';

@Component({
	selector: 'sh-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
	modalState$: Observable<ModalState>;

	constructor(private modalService: ModalService) {
		this.modalState$ = this.modalService.watch();
	}

	ngOnInit(): void {}

	closeModal() {
		this.modalService.close();
	}
}
