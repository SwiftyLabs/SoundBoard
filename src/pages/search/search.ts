import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';
import 'rxjs/add/operator/debounceTime';
import { SocialSharing} from 'ionic-native';
import { FavouritesData } from '../../providers/favouritesdata';
import { GlobalVars } from '../../providers/global';
import { Storage } from '@ionic/storage';
import { Appodeal } from '@ionic-native/appodeal';

 
@Component({
  selector: 'page-home',
  templateUrl: 'search.html'
})
export class SearchPage {
 
    searchTerm: string = '';
    searchTermNull: string = 'dfsdjfsdfhasdjkfhasdkjfklj';
    searchControl: FormControl;
    items: any;
    counter: number =1;  
    searching: any = false;   
media: any = null;
  icon: string;

 ionViewWillEnter() {    
  if (this.global.getMyGlobalNiggerPaid() == true) {
    this.icon = 'share';
  }else{
    this.icon = 'logo-whatsapp';
  }
} 
 
    constructor(public navCtrl: NavController, public storage: Storage, public appodeal: Appodeal, public global: GlobalVars, public favData: FavouritesData, public loadingCtrl: LoadingController, public dataService: Data) {
        this.searchControl = new FormControl();
    }
 
    ionViewDidLoad() {
 
       
 
        this.searchControl.valueChanges.debounceTime(1200).subscribe(search => {
            if (this.searchTerm != null && this.searchTerm != ''){ 
            this.searching = false;
            this.setFilteredItems();
            console.log("if");
          }else {
           
            this.setFilteredItemsNull();
            this.searching = false;
            console.log("else");
          }
          
          
 
        });
 
 
    }
 
    onSearchInput(){
        this.searching = true;
    }
 
    setFilteredItems() {        
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }


    setFilteredItemsNull() {        
        this.items = this.dataService.filterItems(this.searchTermNull);
 
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
 toggleFavourite(item) {      
    this.favData.toggleFavourite(item);
  }

  play(item) {        
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
    item.imageUrl = item.imageUrlUnclicked + "clicked.png";
    setTimeout(() => item.imageUrl = item.imageUrlUnclicked + "unclicked.png", 1000);

    console.log(item)     
    if(this.media) {
      this.media.pause();
    }
    this.media = new Audio(item.file);
    this.media.load();
    this.media.play();
   
   }

  


  
}