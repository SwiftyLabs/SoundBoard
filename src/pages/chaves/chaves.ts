import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { App, MenuController, LoadingController, NavController } from 'ionic-angular';
import { BarrigaPage } from './barriga/barriga';
import { ChapolinPage } from './chapolin/chapolin';
import { ChavessPage } from './chaves/chaves';
import { ChiquinhaPage } from './chiquinha/chiquinha';
import { FlorindaPage } from './florinda/florinda';
import { MadrugaPage } from './madruga/madruga';
import { QuicoPage } from './quico/quico';
import { OutroschavesPage } from './outroschaves/outroschaves';
import { GirafalesPage } from './girafales/girafales';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appodeal } from '@ionic-native/appodeal';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global';

@Component({
  templateUrl: 'chaves.html'
})
export class ChavesPage {
   
   barrigaPage = BarrigaPage;
   chapolinPage = ChapolinPage;
   chavesPage = ChavessPage;
   chiquinhaPage = ChiquinhaPage;
   florindaPage = FlorindaPage;
   outroschavesPage = OutroschavesPage;
   girafalesPage = GirafalesPage;
   madrugaPage = MadrugaPage;
   quicoPage = QuicoPage;
   

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



/************ barriga *********/
  presentLoadingBarriga() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.barrigaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ barriga *********/
  presentLoadingMadruga() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.madrugaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ barriga *********/
  presentLoadingQuico() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.quicoPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}



/************ florinda *********/
  presentLoadingFlorinda() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.florindaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ Chiquinha *********/
  presentLoadingChiquinha() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.chiquinhaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ Girafales *********/
  presentLoadingGirafales() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.girafalesPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ Chaves *********/
  presentLoadingChaves() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.chavesPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ Chapolin *********/
  presentLoadingChapolin() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.chapolinPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ Outros *********/
 presentLoadingOutroschaves() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.outroschavesPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

}
