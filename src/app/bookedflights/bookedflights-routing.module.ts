import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedflightsPage } from './bookedflights.page';

const routes: Routes = [
  {
    path: '',
    component: BookedflightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedflightsPageRoutingModule {}
