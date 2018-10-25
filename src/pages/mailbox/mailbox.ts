import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MailboxSinglePage} from '../mailbox-single/mailbox-single';

@IonicPage()
@Component({
	selector: 'page-mailbox',
	templateUrl: 'mailbox.html',
})
export class MailboxPage {
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {	
	}
  
	emails = [
		{id: 63, name: 'Daniel Westfall', avatar: 63, subject: 'How to solve this issue?', status: 1, time: '34 mins'},
		{id: 64, name: 'Corey Schall', avatar: 64, subject: 'FW: PHP Question', status: 0, time: '1 hour'},
		{id: 65, name: 'Edward Bukowski', avatar: 65, subject: 'Some Reminders to Prepare', status: 1, time: '3 hours'},
		{id: 66, name: 'Victor Blade', avatar: 66, subject: 'DFA Passport Appointment Confirmation', status: 1, time: '2 days'},
		{id: 67, name: 'Chong Stilwell', avatar: 67, subject: 'ORTC Realtime.Co Free account', status: 0, time: '3 days'},
		{id: 68, name: 'Curtis Yerkes', avatar: 68, subject: 'Alienware Public IP Address', status: 0, time: '5 days'},
		{id: 69, name: 'Billie Vanhoose', avatar: 69, subject: 'Activate your new account', status: 0, time: '1 week'},
		{id: 70, name: 'Brett Drewry', avatar: 70, subject: 'Urgent need of a suitable candidate', status: 1, time: '2 weeks'},
		{id: 71, name: 'Ben Hempel', avatar: 71, subject: 'Generating templates', status: 0, time: '1 month'},
		{id: 72, name: 'Guillermo Birchard', avatar: 72, subject: 'Need help with Python', status: 0, time: '3 months'},
		{id: 73, name: 'Michel Mohr', avatar: 73, subject: 'Developer needed', status: 0, time: '5 months'},
		{id: 74, name: 'Quincy Sheley', avatar: 74, subject: 'Help solving code', status: 0, time: '1 year'},
		{id: 75, name: 'Levi Starrett', avatar: 75, subject: 'Hey buddy', status: 0, time: '2 years'},
		{id: 76, name: 'Gayle Forman', avatar: 76, subject: 'Congratulation, youve been selected', status: 0, time: '3 years'}
	];
	
	itemTapped(event, email) {
		this.navCtrl.push('MailboxSinglePage', {
			id: email.id, 
			email: email
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MailboxPage');
	}

}
