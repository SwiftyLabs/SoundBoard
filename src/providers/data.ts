import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { FavouritesData } from './favouritesdata';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { SocialSharing} from 'ionic-native';
import { Appodeal } from '@ionic-native/appodeal';
import { GlobalVars } from './global';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    items: any;
    title: string = "";
    base_url: string = "https://sound-board-cc576.firebaseapp.com/";
    sounds_url: string = "Todos";
    counter: number =1;  
    sounds: any = [];
    media: any = null;
 
  constructor(public http: Http, public favData: FavouritesData,public global: GlobalVars, public loadingCtrl: LoadingController, public storage: Storage, private toastCtrl: ToastController, public appodeal: Appodeal) {
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
            let imageUrl = 'assets/lemon-button-unclicked.png';
            let imageUrlUnclicked = 'assets/lemon-button-';            
            let color = '#e0dd0d';           
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

  /* Plays a sound, pausing other playing sounds if necessary */

    filterItems(searchTerm){
        
        return this.sounds.filter((item) => {            
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;            
        });         
            
 
    } 


 
}