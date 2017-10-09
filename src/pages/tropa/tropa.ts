import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { App, MenuController, LoadingController, NavController } from 'ionic-angular';
import { AndrePage } from './andre/andre';
import { BaianoPage } from './baiano/baiano';
import { FabioPage } from './fabio/fabio';
import { FortunatoPage } from './fortunato/fortunato';
import { NascimentoPage } from './nascimento/nascimento';
import { OutrosPage } from './outros/outros';
import { RochaPage } from './rocha/rocha';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appodeal } from '@ionic-native/appodeal';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global';

@Component({
  templateUrl: 'tropa.html'
})
export class TropaPage {
   
   andrePage = AndrePage;
   baianoPage = BaianoPage;
   fabioPage = FabioPage;
   fortunatoPage = FortunatoPage;
   nascimentoPage = NascimentoPage;
   outrosPage = OutrosPage;
   rochaPage = RochaPage;
   

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



/************ andre *********/
  presentLoadingAndre() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.andrePage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}



/************ nascimento *********/
  presentLoadingNascimento() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.nascimentoPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ Fortunato *********/
  presentLoadingFortunato() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.fortunatoPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ Rocha *********/
  presentLoadingRocha() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.rochaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ Fabio *********/
  presentLoadingFabio() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.fabioPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ Baiano *********/
  presentLoadingBaiano() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.baianoPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ Outros *********/
 presentLoadingOutros() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.outrosPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

}
