
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';
import { RouterModule } from '@angular/router';

// Forms
import { FieldContainerComponent } from './components/form/field-container/field-container.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar/navbar-link/navbar-link.component';
import { NavbarSectionComponent } from './components/navbar/navbar-section/navbar-section.component';

// Input
import { InputTextareaComponent } from './components/form/input-textarea/input-textarea.component';
import { InputSelectComponent } from './components/form/input-select/input-select.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputSwitchComponent } from './components/form/input-switch/input-switch.component';
import { InputRadioComponent } from './components/form/input-radio/input-radio.component';
import { InputCheckboxComponent } from './components/form/input-checkbox/input-checkbox.component';
import { InputDateComponent } from './components/form/input-date/input-date.component';
import { InputSearchComponent } from './components/form/input-search/input-search.component';
import { InputFileComponent } from './components/form/input-file/input-file.component';

// Buttons
import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonActionComponent } from './components/buttons/button-action/button-action.component';
import { AvatarComponent } from './components/utils/avatar/avatar.component';

// Alert & Notifications
import { AlertComponent } from './components/alert/alert.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CardComponent } from './components/card/card.component';

// Table
import { TableComponent } from './components/table/table.component';

// Modal
import { ModalComponent } from './components/modal/modal.component';

// List
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';

// Chat
import {ChatMessageComponent} from './components/chat/chat-message/chat-message.component';
import {ChatAnnouncementComponent} from './components/chat/chat-announcement/chat-announcement.component';

const COMPONENTS = [
	FieldContainerComponent,
	InputTextComponent,
	InputPasswordComponent,
	InputTextareaComponent,
	InputSelectComponent,
	InputSwitchComponent,
	InputRadioComponent,
	InputCheckboxComponent,
	InputDateComponent,
	InputSearchComponent,
	InputFileComponent,
	ButtonComponent,
	ButtonActionComponent,
	NavbarComponent,
	NavbarLinkComponent,
	NavbarSectionComponent,
	TableComponent,
	AlertComponent,
	NotificationComponent,
	ModalComponent,
	CardComponent,
	ListComponent,
	ListItemComponent,
	ChatMessageComponent,
	ChatAnnouncementComponent,
	AvatarComponent
];

@NgModule({
	declarations: [NgxDsSecretHouseComponent, ...COMPONENTS],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		CommonModule,
	],
	exports: [NgxDsSecretHouseComponent, ...COMPONENTS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxDsSecretHouseModule {}
