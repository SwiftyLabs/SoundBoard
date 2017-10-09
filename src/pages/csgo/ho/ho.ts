import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FavouritesData } from '../../../providers/favouritesdata';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { SocialSharing} from 'ionic-native';
import { Appodeal } from '@ionic-native/appodeal';
import { GlobalVars } from '../../../providers/global';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'ho.html'
})
export class HoPage {

  /* EDIT THESE */
  title: string = "Ho";
  base_url: string = "https://sound-board-cc576.firebaseapp.com/Csgo/";
  sounds_url: string = "Ho";
  counter: number =1;  
  sounds: any = [];
media: any = null;
  icon: string;

 ionViewWillEnter() {    
  if (this.global.getMyGlobalNiggerPaid() == true) {
    this.icon = 'share';
  }else{
    this.icon = 'logo-whatsapp';
  }
}
  constructor(public http: Http, public favData: FavouritesData, public loadingCtrl: LoadingController, public storage: Storage, public global: GlobalVars, private toastCtrl: ToastController, public appodeal: Appodeal) {
    this.http.get(this.base_url + this.sounds_url)
      .subscribe(
        data => {
          /* Create a webpage out of the data from the http.get request */
          let content: string = data.text();
          let doc: any = document.createElement("html");
          doc.innerHTML = content;

          /* Extract all "a" tags from it */
          let links: any = doc.getElementsByTagName("a");

          /* Loop through them, saving their title and sound file */
          for(let link of links) {
            let filename = link.getAttribute("href")
            let imageUrl = 'assets/csgo-button-unclicked.png';
            let imageUrlUnclicked = 'assets/csgo-button-';            
            let color = '#d5b27f';           
            if(filename.startsWith("/")) {
              filename = this.base_url + filename
            }
            else {
              filename = this.base_url + this.sounds_url + "/" + filename
            }
            this.sounds.push({
              title: link.innerHTML,
              file: filename,
              imageUrl: imageUrl,
              color: color,
              imageUrlUnclicked: imageUrlUnclicked
              

            });
          }
        },
        err => console.error('There was an error: ' + err),
        () => console.log('Get request completed')
       );
  }

ionViewWillLeave() {
    if(this.media) {
      this.media.pause();
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
