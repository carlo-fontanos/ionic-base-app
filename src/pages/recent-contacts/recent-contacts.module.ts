import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentContactsPage } from './recent-contacts';

@NgModule({
    declarations: [
        RecentContactsPage,
    ],
    imports: [
        IonicPageModule.forChild(RecentContactsPage),
    ],
})
export class RecentContactsPageModule {}
