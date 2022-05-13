import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Forms
import { FieldContainerComponent } from "./components/form/field-container/field-container.component";
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { InputTextareaComponent } from './components/form/input-textarea/input-textarea.component';
import { InputSelectComponent } from './components/form/input-select/input-select.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputSwitchComponent } from './components/form/input-switch/input-switch.component';

// Buttons
import { ButtonComponent } from './components/buttons/button/button.component';

const COMPONENTS = [
	FieldContainerComponent,
	InputTextComponent,
	InputPasswordComponent,
	InputTextareaComponent,
	InputSelectComponent,
	InputSwitchComponent,
	ButtonComponent
]

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
		...COMPONENTS
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
	],
	exports: [
		NgxDsSecretHouseComponent,
		...COMPONENTS
	]
})
export class NgxDsSecretHouseModule {
}
