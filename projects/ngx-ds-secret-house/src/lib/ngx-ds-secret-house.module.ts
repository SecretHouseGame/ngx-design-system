import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';

import { FieldContainerComponent } from "./components/form/field-container/field-container.component";

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
  		InputTextComponent,
		FieldContainerComponent
	],
	imports: [
		ReactiveFormsModule
	],
	exports: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent
	]
})
export class NgxDsSecretHouseModule {
}
