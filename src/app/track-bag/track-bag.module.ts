import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackBagPageRoutingModule } from './track-bag-routing.module';

import { TrackBagPage } from './track-bag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackBagPageRoutingModule
  ],
  declarations: [TrackBagPage]
})
export class TrackBagPageModule {}
