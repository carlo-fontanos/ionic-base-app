import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-contacts',
	templateUrl: 'contacts.html',
})
export class ContactsPage {
	contacts = [];
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	}

	ionViewDidLoad() {
		this.loadJson();
		console.log('ionViewDidLoad ContactsPage');
	}
	
	loadJson() {
        this.http.get('https://randomuser.me/api/?results=50')
            .map(res => res.json())
            .subscribe(res => {
                for(let data of res.results) {
                    this.contacts.push(data);
                }
            }, (err) => {
                alert("failed loading json data");
            }
        );
    }

}
