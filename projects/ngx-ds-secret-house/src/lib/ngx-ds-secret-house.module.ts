import { NgModule } from '@angular/core';
import { NgxDsSecretHouseComponent } from './ngx-ds-secret-house.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar/navbar-link/navbar-link.component';
import { NavbarSectionComponent } from './components/navbar/navbar-section/navbar-section.component';

@NgModule({
	declarations: [
		NgxDsSecretHouseComponent,
  		InputTextComponent,
  		NavbarComponent,
		NavbarLinkComponent,
		NavbarSectionComponent,
	],
	imports: [],
	exports: [
		NgxDsSecretHouseComponent,
	]
})
export class NgxDsSecretHouseModule {
}
