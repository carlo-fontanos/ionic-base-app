import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
	segment: 'users/:id',
	defaultHistory: ['UsersPage']
})
@Component({
	selector: 'page-users-single',
	templateUrl: 'users-single.html',
})
export class UsersSinglePage {
	selectedItem: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.selectedItem = navParams.get('user');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UsersSinglePage');
	}

}
