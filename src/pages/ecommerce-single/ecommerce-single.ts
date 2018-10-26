import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage({
	segment: 'ecommerce/:id',
	defaultHistory: ['EcommercePage']
})
@Component({
	selector: 'page-ecommerce-single',
	templateUrl: 'ecommerce-single.html',
})
export class EcommerceSinglePage {
	item: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.item = navParams.get('product');
	}

	ionViewDidLoad() {
		let id = this.navParams.get('id');
		
		this.http.get('http://carlofontanos.com/demo/walmart-api.php?id=' +  id + '&type=id')
            .map(res => res.json())
            .subscribe(res => {
				this.item = res;
            }, (err) => {
                alert("failed loading json data");
            }
        );
	}

}
