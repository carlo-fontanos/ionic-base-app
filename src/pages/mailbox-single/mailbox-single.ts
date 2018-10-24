import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-mailbox-single',
	templateUrl: 'mailbox-single.html',
})
export class MailboxSinglePage {
	selectedItem: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.selectedItem = navParams.get('email');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MailboxSinglePage');
	}

}
