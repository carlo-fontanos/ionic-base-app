import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WidgetsPage } from '../pages/widgets/widgets';
import { EcommercePage } from '../pages/ecommerce/ecommerce';
import { MailboxPage } from '../pages/mailbox/mailbox';
import { MailboxSinglePage } from '../pages/mailbox-single/mailbox-single';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		WidgetsPage,
		EcommercePage,
		MailboxPage,
		MailboxSinglePage,
		ChatPage,
		ProfilePage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp,{
			mode: 'md' /* ios, md or wp */
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage,
		WidgetsPage,
		EcommercePage,
		MailboxPage,
		MailboxSinglePage,
		ChatPage,
		ProfilePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
