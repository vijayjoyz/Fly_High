import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedflightsPageRoutingModule } from './bookedflights-routing.module';

import { BookedflightsPage } from './bookedflights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedflightsPageRoutingModule
  ],
  declarations: [BookedflightsPage]
})
export class BookedflightsPageModule {}
