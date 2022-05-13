import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';

// Forms
import { FieldContainerComponent } from "./components/form/field-container/field-container.component";
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { InputTextareaComponent } from './components/form/input-textarea/input-textarea.component';

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
  		InputTextComponent,
    InputTextareaComponent,
	],
	imports: [
		ReactiveFormsModule
	],
	exports: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
		InputTextComponent
	]
})
export class NgxDsSecretHouseModule {
}
