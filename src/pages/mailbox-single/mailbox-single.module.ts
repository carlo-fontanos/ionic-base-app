import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailboxSinglePage } from './mailbox-single';

@NgModule({
	declarations: [
		MailboxSinglePage,
	],
	imports: [
		IonicPageModule.forChild(MailboxSinglePage),
	],
})
export class MailboxSinglePageModule {}
