import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Market } from '@ionic-native/market';


@Injectable()
export class GlobalVars {
 myGlobalVar: number; 
 myGlobalShare: number; 
 myGlobalAlready: boolean;
 myGlobalString: string;
 myGlobalNiggerPaid: boolean;
 myGlobalHideButton: boolean;
 myGlobalCounter: number;


  constructor(public storage: Storage, public market: Market, public alertCtrl: AlertController) {
    
  }

  setMyGlobalVar(value) {
    this.myGlobalVar = value;   
    this.storage.ready().then(() => {

      // *********** Show Model ***************
      this.storage.get('myGlobalVar').then((val) => {
        if (this.getMyGlobalVar() == 26) {          
         let confirm = this.alertCtrl.create({
             title: 'SEXO ORAL?',
              message: 'Agora que temos sua atenção, poderia nos ajudar e avaliar o aplicativo no Google Play',
              buttons: [{
                  text: 'NÃO',
                  handler: () => {
                    this.myGlobalAlready = false
                    this.storage.set('myGlobalAlready', false);   
                  }
                },
                { text: 'CLARO',
                  handler: () => {
                    this.myGlobalAlready = true
                    this.storage.set('myGlobalAlready', true);
                    this.market.open('com.ionicframework.ionicsoundboard279073');     
                  }
                }
              ]
            });
            confirm.present(); 
      }
        if (this.getMyGlobalVar() == 57 && this.getMyGlobalAlready() == false) {           
         let confirm = this.alertCtrl.create({
             title: 'AFFFF MANO',
              message: 'Da uma ajudinha ai pow, nunca te pedi nada. Dê sua avaliação no Google Play, pfv',
              buttons: [{
                  text: 'VAI A MERDA',
                  handler: () => {
                    this.myGlobalAlready = false
                    this.storage.set('myGlobalAlready', false); 
                    
                  }
                },
                { text: 'PQP, OK',
                  handler: () => {
                    this.myGlobalAlready = true
                    this.storage.set('myGlobalAlready', true); 
                    this.market.open('com.ionicframework.ionicsoundboard279073');               
                  }
                }
              ]
            });
            confirm.present(); 
      }
      
      })
    // *********** END Show Model ***************  
    this.storage.set('myGlobalVar', value);    
    });
  }

  setMyGlobalShare(value) {
    this.myGlobalShare = value;
    this.storage.ready().then(() => {
    this.storage.set('myGlobalShare', value);    
    });
  }


  setMyGlobalNiggerPaid(value) {
    this.myGlobalNiggerPaid = value;
    this.storage.ready().then(() => {
    this.storage.set('myGlobalNiggerPaid', value);    
    });
  }

  setMyGlobalHideButton(value) {
    this.myGlobalHideButton = value;
    this.storage.ready().then(() => {
    this.storage.set('myGlobalHideButton', value);    
    });
  }

  setMyGlobalCounter(value) {
    this.myGlobalCounter = value;
    this.storage.ready().then(() => {
    this.storage.set('myGlobalCounter', value);    
    });
  }

  getMyGlobalCounter() {
    return this.myGlobalCounter;
  } 

  getMyGlobalNiggerPaid() {
    return this.myGlobalNiggerPaid;
  } 

  getMyGlobalHideButton() {
    return this.myGlobalHideButton;
  }
 
  getMyGlobalVar() {
    return this.myGlobalVar;
  }

  getMyGlobalAlready() {
    return this.myGlobalAlready;
  }

}