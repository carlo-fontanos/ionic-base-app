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
    hasMoreItems = 1;
    lastItem = 0;
    limit = 20;
    users = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    }
    
    loadJson() {
        this.http.get('https://randomuser.me/api/?results=30')
            .map(res => res.json())
            .subscribe(res => {
                for(let data of res.results) {
                    this.users.push(data);
                }
            }, (err) => {
                alert("failed loading json data");
            }
        );
        return true;
    }

    doInfinite(): Promise<any> {
        console.log('Begin async operation');

        return new Promise((resolve) => {
            if(this.loadJson()){
                resolve();
            }
        })
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
