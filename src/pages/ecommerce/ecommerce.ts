import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-ecommerce',
	templateUrl: 'ecommerce.html',
})
export class EcommercePage {
	hasMoreItems = 1;
    lastItem = 0;
    limit = 20;
    products = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
    }
    
    loadJson() {
		const loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();

        let offset = this.lastItem == 0 ? 1 : this.lastItem + this.limit /* Start offset with 1 on first load */
		
        this.http.get('http://carlofontanos.com/demo/walmart-api.php?query=bags&limit=' +  this.limit + '&offset=' + offset + '&sort=relevance&type=search')
            .map(res => res.json())
            .subscribe(res => {
                for(let data of res.items) {
                    this.products.push(data);
                }
				
				this.lastItem = this.lastItem + this.limit; /* Set new last item count */

                loader.dismiss();
            }, (err) => {
                alert("failed loading json data");
            }
        );
    }

    doInfinite(): Promise<any> {
        return new Promise((resolve) => {
            /* setTimeout prevents multiple ajax calls */
			setTimeout(() => {
				this.loadJson()
				resolve();
			}, 300);
        })
    }
    
    itemTapped(event, product) {
        this.navCtrl.push('EcommerceSinglePage', {
			id: product.itemId
        });
    }

    ionViewDidLoad() {
        this.loadJson();
        console.log('ionViewDidLoad EcommercePage');
    }
}
