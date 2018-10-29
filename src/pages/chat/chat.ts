import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ChatPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  contactsRoot = 'ContactsPage'
  messagesRoot = 'MessagesPage'
  callsRoot = 'CallsPage'
  settingsRoot = 'SettingsPage'


  constructor(public navCtrl: NavController) {}

}
