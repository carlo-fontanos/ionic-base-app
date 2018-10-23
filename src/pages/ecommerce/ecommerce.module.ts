import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcommercePage } from './ecommerce';

@NgModule({
  declarations: [
    EcommercePage,
  ],
  imports: [
    IonicPageModule.forChild(EcommercePage),
  ],
})
export class EcommercePageModule {}
