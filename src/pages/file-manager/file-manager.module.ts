import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileManagerPage } from './file-manager';

@NgModule({
    declarations: [
        FileManagerPage,
    ],
    imports: [
        IonicPageModule.forChild(FileManagerPage),
    ],
})
export class FileManagerPageModule {}
