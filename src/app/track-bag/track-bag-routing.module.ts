import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackBagPage } from './track-bag.page';

const routes: Routes = [
  {
    path: '',
    component: TrackBagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackBagPageRoutingModule {}
