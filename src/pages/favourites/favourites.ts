import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
import { SocialSharing, AdMob } from 'ionic-native';
import { SoundboardPage } from '../soundboard/soundboard';
import { FavouritesData } from '../../providers/favouritesdata';
import { Appodeal } from '@ionic-native/appodeal';
import { GlobalVars } from '../../providers/global';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'favourites.html'
})
export class FavouritesPage {

  /* EDIT THESE */
  title: string = "Favourites";
  counter: number =1;
  sounds: any = [];
media: any = null;
  icon: string;

   warning = "hide";
  constructor(public http: Http, public favData: FavouritesData, public loadingCtrl: LoadingController, public appodeal: Appodeal, public storage: Storage, public global: GlobalVars,) {    
   
  }

  ionViewWillEnter() {
     if (this.global.getMyGlobalNiggerPaid() == true) {
    this.icon = 'share';
  }else{
    this.icon = 'logo-whatsapp';
  }
        if ( this.favData.getAllFavourites().length == 0){
      this.warning = "show swiper-slide";
        }else{
        this.sounds = this.favData.getAllFavourites();
        this.warning = "hide";
      }
   }

 public share(file: string): void {
    let loading = this.loadingCtrl.create({
      content: 'Preparando áudio para enviar...'
    });
    loading.present();
    if (this.global.getMyGlobalNiggerPaid() == true) {
      SocialSharing.share(null, null, file).then(res => {
        loading.dismiss();
      }).catch(err => {
        loading.dismiss();
        console.log(err);
      });
    } else {
      SocialSharing.shareViaWhatsAppToReceiver(null, null, file).then(res => {
        loading.dismiss();
      }).catch(err => {
        loading.dismiss();
        console.log(err);
      });
    }   
  }
ionViewWillLeave() {
    if(this.media) {
      this.media.pause();
    }
  }
 
  /* Plays a sound, pausing other playing sounds if necessary */

  play(sound) { 
    if (this.counter >= 5 && this.global.getMyGlobalNiggerPaid() == false){  
      this.appodeal.show(this.appodeal.AD_TYPES.INTERSTITIAL);
         this.counter = 0;

    }else{
      this.counter++;
    }
	this.storage.get('myGlobalVar').then((val) => {
      if (val != 0){
          val++;
          this.global.setMyGlobalVar(val);
         console.log('Entered If', val);
     }

       })
    sound.imageUrl = sound.imageUrlUnclicked + "clicked.png";
    setTimeout(() => sound.imageUrl = sound.imageUrlUnclicked + "unclicked.png", 1000);  
    console.log(sound)
    if(this.media) {
      this.media.pause();
    }
    this.media = new Audio(sound.file);
    this.media.load();
    this.media.play();
   }

   toggleFavourite(sound) {
    this.favData.toggleFavourite(sound);
  }
}