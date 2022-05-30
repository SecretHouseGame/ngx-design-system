import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';

// Forms
import { FieldContainerComponent } from "./components/form/field-container/field-container.component";
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar/navbar-link/navbar-link.component';
import { NavbarSectionComponent } from './components/navbar/navbar-section/navbar-section.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
  		InputTextComponent,
  		NavbarComponent,
		NavbarLinkComponent,
		NavbarSectionComponent,
		FieldContainerComponent,
	],
	imports: [
		ReactiveFormsModule,
		RouterModule,
		CommonModule
	],
	exports: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
		InputTextComponent,
		NavbarComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxDsSecretHouseModule {
}
