import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'flight-details',
    loadChildren: () => import('./flight-details/flight-details.module').then( m => m.FlightDetailsPageModule)
  },
  {
    path: 'payment-page',
    loadChildren: () => import('./payment-page/payment-page.module').then( m => m.PaymentPagePageModule)
  },
  {
    path: 'track-bag',
    loadChildren: () => import('./track-bag/track-bag.module').then( m => m.TrackBagPageModule)
  },
  {
    path: 'bookedflights',
    loadChildren: () => import('./bookedflights/bookedflights.module').then( m => m.BookedflightsPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
