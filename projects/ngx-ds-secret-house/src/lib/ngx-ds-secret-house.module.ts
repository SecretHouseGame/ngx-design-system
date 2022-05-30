import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';

// Forms
import { FieldContainerComponent } from './components/form/field-container/field-container.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar/navbar-link/navbar-link.component';
import { NavbarSectionComponent } from './components/navbar/navbar-section/navbar-section.component';
import { RouterModule } from '@angular/router';
import { InputTextareaComponent } from './components/form/input-textarea/input-textarea.component';
import { InputSelectComponent } from './components/form/input-select/input-select.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputSwitchComponent } from './components/form/input-switch/input-switch.component';

// Buttons
import { ButtonComponent } from './components/buttons/button/button.component';

// Table
import { TableComponent } from './components/table/table.component';
import { TableConfig } from './interfaces/table';

const COMPONENTS = [
	FieldContainerComponent,
	InputTextComponent,
	InputPasswordComponent,
	InputTextareaComponent,
	InputSelectComponent,
	InputSwitchComponent,
	ButtonComponent,
	NavbarComponent,
	NavbarLinkComponent,
	NavbarSectionComponent,
	TableComponent
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
