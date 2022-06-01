import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ModalState {
	OPEN = 'open',
	CLOSE = 'close',
}

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	private displayModal: BehaviorSubject<ModalState> =
		new BehaviorSubject<ModalState>(ModalState.CLOSE);

	watch(): Observable<ModalState> {
		return this.displayModal.asObservable();
	}

	open() {
		this.displayModal.next(ModalState.OPEN);
	}

	close() {
		this.displayModal.next(ModalState.CLOSE);
	}

	constructor() {}
}
