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

// Buttons
import { BtnPrimaryComponent } from './components/buttons/btn-primary/btn-primary.component';
import { InputSwitchComponent } from './components/form/input-switch/input-switch.component';
import { InputRadioComponent } from './components/form/input-radio/input-radio.component';
import { InputCheckboxComponent } from './components/form/input-checkbox/input-checkbox.component';
import { InputDateComponent } from './components/form/input-date/input-date.component';
import { InputSearchComponent } from './components/form/input-search/input-search.component';
import { InputFileComponent } from './components/form/input-file/input-file.component';

const COMPONENTS = [
	FieldContainerComponent,
	InputTextComponent,
	InputPasswordComponent,
	InputTextareaComponent,
	InputSelectComponent,
	InputSwitchComponent,
	BtnPrimaryComponent,
	InputRadioComponent,
	InputCheckboxComponent,
	InputDateComponent,
	InputSearchComponent,
	InputFileComponent,
]

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
		...COMPONENTS,
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
