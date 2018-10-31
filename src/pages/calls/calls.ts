import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-calls',
	templateUrl: 'calls.html',
})
export class CallsPage {
	calls: string;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
	
	callsArray = [
		{id: 63, name: 'Daniel Westfall', number: '+1 212-855-2885', avatar: 63, voicemail: 1, missed: 0, time: 'Monday', location: 'United States'},
		{id: 64, name: 'Corey Schall', number: '+1 756-855-7954', avatar: 64, voicemail: 0, missed: 1, time: 'Theusday', location: 'United States'},
		{id: 65, name: 'Edward Bukowski', number: '+1 254-39-2396', avatar: 65, voicemail: 1, missed: 0, time: 'Thursday', location: 'United States'},
		{id: 66, name: 'Victor Blade', number: '+1 864-855-8944', avatar: 66, voicemail: 1, missed: 1, time: '10/13/2018', location: 'United States'},
		{id: 67, name: 'Chong Stilwell', number: '+1 946-855-6693', avatar: 67, voicemail: 0, missed: 0, time: '09/11/2018', location: 'United States'},
		{id: 68, name: 'Curtis Yerkes', number: '+1 154-855-7954', avatar: 68, voicemail: 0, missed: 0, time: '08/03/2018', location: 'United States'},
		{id: 69, name: 'Billie Vanhoose', number: '+1 878-855-4855', avatar: 69, voicemail: 0, missed: 0, time: '07/07/2018', location: 'United States'},
		{id: 70, name: 'Brett Drewry', number: '+1 237-784-5795', avatar: 70, voicemail: 1, missed: 1, time: '07/02/2018', location: 'United States'},
		{id: 71, name: 'Ben Hempel', number: '+1 945-855-7954', avatar: 71, voicemail: 0, missed: 0, time: '06/16/2018', location: 'United States'},
		{id: 72, name: 'Guillermo Birchard', number: '+ 1 466-463-7835', avatar: 72, voicemail: 0, missed: 1, time: '05/21/2018', location: 'United States'},
		{id: 73, name: 'Michel Mohr', number: '+1 224-855-7954', avatar: 73, voicemail: 0, missed: 1, time: '05/20/2018', location: 'United States'},
		{id: 74, name: 'Quincy Sheley', number: '+1 112-855-3488', avatar: 74, voicemail: 0, missed: 1, time: '05/18/2018', location: 'United States'},
		{id: 75, name: 'Levi Starrett', number: '+1 428-855-9754', avatar: 75, voicemail: 0, missed: 0, time: '04/17/2018', location: 'United States'},
		{id: 76, name: 'Gayle Forman', number: '+1 956-855-7954', avatar: 76, voicemail: 0, missed: 1, time: '03/25/2018', location: 'United States'},
	];

	ionViewDidLoad() {
		console.log('ionViewDidLoad CallsPage');
		this.calls = "all"; /* Set default tab for calls */
	}

}
