import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, LoadingController } from 'ionic-angular';
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
    variants = [];
	@ViewChild(Slides) slides: Slides;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
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
		const loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
		
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

                if(res.variants){
                    let i = 1;
                    for(let variant_id of res.variants) {
                        setTimeout(() => {
                            this.addVariant(variant_id);
                        }, (i / 2) * 800 );
                        i++;
                    }
                }
				
				loader.dismiss();
				
            }, (err) => {
                alert("failed loading json data");
            }
        );
        console.log(this.variants);
	}

    addVariant(id) {
        this.http.get('http://carlofontanos.com/demo/walmart-api.php?id=' +  id + '&type=id')
            .map(res => res.json())
            .subscribe(res => {
                if(!res.errors){
                    this.variants.push(res);
                }
                
            }, (err) => {
                console.log('failed loading variant ID' + id);
            }
        );
    }

    itemTapped(event, product) {
        this.navCtrl.push('EcommerceSinglePage', {
            id: product.itemId
        });
    }
	
	escapeHtml(str) {
		return str.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
		
	}

}
