import { NgModule } from '@angular/core';
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
  		InputTextComponent,
	],
	imports: [],
	exports: [
		NgxDsSecretHouseComponent
	]
})
export class NgxDsSecretHouseModule {
}
