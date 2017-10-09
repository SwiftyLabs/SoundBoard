import { Component } from '@angular/core';
import { SocialSharing } from 'ionic-native';
import { SoundboardPage } from '../soundboard/soundboard';
import { FavouritesPage } from '../favourites/favourites';
import { Storage } from '@ionic/storage';
import { Appodeal } from '@ionic-native/appodeal';
import { GlobalVars } from '../../providers/global';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { AlertController, NavController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SoundboardPage;
  tab2Root = FavouritesPage;
  mybutton: boolean;



  constructor(public storage: Storage,public appodeal: Appodeal, public navCtrl: NavController, public alertCtrl: AlertController, public inAppPurchase: InAppPurchase, public global: GlobalVars, ) {

  }

  public share(): void {
    SocialSharing.share('Memes Br - Audios para Whatsapp', null, 'www/assets/berro.gif', 'https://goo.gl/iiTufh')
      .then(res => {
        this.storage.get('myGlobalShare').then((val) => {
          if (val != 0) {
            val++;
            this.global.setMyGlobalShare(val);
            console.log('Entered If', val);
          }
        })
      }).catch(err => {

        console.log(err);
      });
  }



  buy(){                        
                           
      let confirm = this.alertCtrl.create({
             title: 'AGORA BOTEI FÉ',
              message: 'Pelo mesmo preço de uma coxinha de terminal, você pode ter o aplicativo sem os anúncios chato pcrl. você também habilita para compartilhar em outros apps',
              buttons: [{
                  text: 'SOU POBRE',
                  handler: () => {
                       
                  }
                },
                { text: 'TENHO DINHEIRO',
                  handler: () => {
                    this.inAppPurchase
                      .buy('remove_ads')
                      .then((data) => {
                        console.log(data);
                        this.storage.set('setMyGlobalNiggerPaid', true);
                        this.storage.set('setMyGlobalNiggerPaid', false);
                        this.global.setMyGlobalNiggerPaid(true);
                        this.global.setMyGlobalHideButton(false);
                        this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);  
                        this.appodeal.hide(this.appodeal.AD_TYPES.BANNER_TOP);
                        this.appodeal.hide(this.appodeal.AD_TYPES.INTERSTITIAL);
                        this.navCtrl.setRoot(this.navCtrl.getActive().component);  
                        
                      })
                      .catch(function (err) {
                        console.log(err);
                      });     
                  }
                }
              ]
            });
            confirm.present();
  }

}






