import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
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
	item = [];
	images = [];
	@ViewChild(Slides) slides: Slides;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.item = navParams.get('product');
	}
	
	nextImage() {
		this.slides.slideNext();
	}

	prevImage() {
		this.slides.slidePrev();
	}

	ionViewDidLoad() {
		let id = this.navParams.get('id');
		
		this.http.get('http://carlofontanos.com/demo/walmart-api.php?id=' +  id + '&type=id')
            .map(res => res.json())
            .subscribe(res => {
				this.item = res;
				
				if(res.imageEntities){
					for(let image of res.imageEntities) {
						if(image.largeImage){
							this.images.push(image.largeImage);
						}
					}
                }
				
            }, (err) => {
                alert("failed loading json data");
            }
        );
	}

}
