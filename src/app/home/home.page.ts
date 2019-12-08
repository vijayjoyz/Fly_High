import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  login(){
    console.log("Going to booking page");
  }
  signup(){
    console.log("Going to signup page");
  }

}
