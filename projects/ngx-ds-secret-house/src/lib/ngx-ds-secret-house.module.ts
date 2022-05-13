import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';

// Forms
import { FieldContainerComponent } from "./components/form/field-container/field-container.component";
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
  		InputTextComponent
	],
	imports: [
		ReactiveFormsModule,
  		InputTextComponent,
    	AlertComponent,
	],
	exports: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
		InputTextComponent
	]
})
export class NgxDsSecretHouseModule {
}
