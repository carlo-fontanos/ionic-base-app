import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-users',
	templateUrl: 'users.html',
})
export class UsersPage {
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	}
	
	users: any;
	
	loadJson() {
		this.http.get('https://randomuser.me/api/?results=30')
			.map(res => res.json())
			.subscribe(res => {
				this.users = res.results;
			}, (err) => {
				alert("failed loading json data");
			}
		);
	}
	
	itemTapped(event, user) {
		this.navCtrl.push('UsersSinglePage', {
			id: user.login.uuid, 
			user: user
		});
	}

	ionViewDidLoad() {
		this.loadJson();
		console.log('ionViewDidLoad UsersPage');
	}

}
