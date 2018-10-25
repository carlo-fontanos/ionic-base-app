import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailboxPage } from './mailbox';

@NgModule({
	declarations: [
		MailboxPage,
	],
	imports: [
		IonicPageModule.forChild(MailboxPage),
	],
})
export class MailboxPageModule {}
