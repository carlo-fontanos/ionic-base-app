import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersSinglePage } from './users-single';

@NgModule({
	declarations: [
		UsersSinglePage,
	],
	imports: [
		IonicPageModule.forChild(UsersSinglePage),
	],
})
export class UsersSinglePageModule {}
