import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WidgetsPage } from '../pages/widgets/widgets';
import { EcommercePage } from '../pages/ecommerce/ecommerce';
import { MailboxPage } from '../pages/mailbox/mailbox';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;

	pages: Array<{
		title: string, 
		component: any,
		icon_ios: string,
		icon_md: string
	}>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage, icon_ios: 'stats-outline', icon_md: 'stats' },
			{ title: 'List', component: ListPage, icon_ios: 'list-outline', icon_md: 'list' },
			{ title: 'Widgets', component: WidgetsPage, icon_ios: 'apps-outline', icon_md: 'apps' },
			{ title: 'Ecommerce', component: EcommercePage, icon_ios: 'cart-outline', icon_md: 'cart' },
			{ title: 'Mailbox', component: MailboxPage, icon_ios: 'mail-outline', icon_md: 'mail' },
			{ title: 'Chat', component: ChatPage, icon_ios: 'chatboxes-outline', icon_md: 'chatboxes' },
			{ title: 'Profile', component: ProfilePage, icon_ios: 'person-outline', icon_md: 'person' }
		];
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
		this.nav.setRoot(page.component);
	}
}
