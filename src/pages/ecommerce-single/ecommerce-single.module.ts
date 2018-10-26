import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcommerceSinglePage } from './ecommerce-single';

@NgModule({
	declarations: [
		EcommerceSinglePage,
	],
	imports: [
		IonicPageModule.forChild(EcommerceSinglePage),
	],
})
export class EcommerceSinglePageModule {}
