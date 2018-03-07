import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RenunganDetailsPage } from './renungan-details';

@NgModule({
  declarations: [
    RenunganDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RenunganDetailsPage),
  ],
})
export class RenunganDetailsPageModule {}
