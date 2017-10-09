import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FavouritesData } from '../../providers/favouritesdata';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { SocialSharing, AdMob } from 'ionic-native';
import { GlobalVars } from '../../providers/global';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'todos.html'
})
export class TodosPage {

  /* EDIT THESE */
  title: string = "Todos";
  base_url: string = "https://sound-board-cc576.firebaseapp.com/";
  sounds_url: string = "Todos";
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
  constructor(public http: Http, public favData: FavouritesData,public loadingCtrl: LoadingController, public storage: Storage, public global: GlobalVars, private toastCtrl: ToastController) {
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
            let imageUrl = 'assets/white-button-unclicked.png';
            let imageUrlUnclicked = 'assets/white-button-';            
            let color = '#C9C5C0';           
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
    let options2 = {adId: 'ca-app-pub-5084630210166893/1684079361', isTesting: false};
     AdMob.prepareInterstitial(options2)
         .then(() => {
           AdMob.showInterstitial();
    });
     this.counter = 0;

    }else{
      this.counter++;
    }
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
