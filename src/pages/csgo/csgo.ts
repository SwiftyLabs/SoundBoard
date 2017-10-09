import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { App, MenuController, LoadingController, NavController } from 'ionic-angular';
import { AgPage } from './ag/ag';
import { HoPage } from './ho/ho';
import { PwPage } from './pw/pw';
import { RadioPage } from './radio/radio';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appodeal } from '@ionic-native/appodeal';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global';

@Component({
  templateUrl: 'csgo.html' 
})
export class CsgoPage {
   
   agPage = AgPage;
   hoPage = HoPage;   
   pwPage = PwPage;
   radioPage = RadioPage;  
   

   constructor(app: App, 
               menu: MenuController, 
               public global: GlobalVars, 
               public alertCtrl: AlertController, 
               public storage: Storage,
               public http: Http, 
               public loadingCtrl: LoadingController, 
               public nav: NavController,  
               splashScreen: SplashScreen, 
               public appodeal: Appodeal) {
    this.nav = nav;
    menu.enable(true);
   } 



/************ ag *********/
  presentLoadingAg() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.agPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}


/************ radio *********/
  presentLoadingRadio() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.radioPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ Pw *********/
  presentLoadingPw() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.pwPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}


/************ Ho *********/
  presentLoadingHo() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.hoPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}


}
