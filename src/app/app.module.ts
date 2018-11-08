import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelpersProvider } from '../providers/helpers/helpers';

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp,{
			mode: 'md' /* ios, md or wp */
		}),
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
    	HelpersProvider
	]
})
export class AppModule {}
