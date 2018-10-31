import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelpersProvider } from '../providers/helpers/helpers';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = 'HomePage'; /* Lazy loading: load all pages as string */
	dropdownList: any[];

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public helpers: HelpersProvider) {
		this.initializeApp();
		this.dropdownList = [
			{
			    "name": "Dropdown",
			    "children": [
			        {
			            "name": "Links",
			            "children": [
	                        {
	                            "name": "Link 1",
								"path": "/"
	                        },
	                        {
	                            "name": "Link 2",
								"path": "/"
	                        },
	                        {
	                            "name": "Link 3",
								"path": "/"
	                        }
			            ]
			        },
			        {
			            "name": "List",
			            "children": [
			                {
			                    "name": "Pizza Salami",
			                    "description": "Pork chop jowl capicola porchetta, kielbasa prosciutto boudin bacon pork pig.",
			                    "price": "$10",
								"path": "/"
			                },
			                {
			                    "name": "Pizza Prosciutto",
			                    "description": "Pork chop pastrami landjaeger chuck brisket",
			                    "price": "$12",
								"path": "/"
			                }
			            ]
			        }
			    ]
			}
		]
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page);
	}
}
