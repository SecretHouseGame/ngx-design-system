import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';

// Forms
import { FieldContainerComponent } from "./components/form/field-container/field-container.component";
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
  		InputTextComponent,
		AlertComponent,
    	NotificationComponent,
	],
	imports: [
		ReactiveFormsModule,
  		InputTextComponent,
    	
	],
	exports: [
		NgxDsSecretHouseComponent,
		FieldContainerComponent,
		InputTextComponent
	]
})
export class NgxDsSecretHouseModule {
}
