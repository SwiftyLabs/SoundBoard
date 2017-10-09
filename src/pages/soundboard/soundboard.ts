import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { App, MenuController, LoadingController, NavController, Platform } from 'ionic-angular';
import { DragonPage } from '../dragon/dragon';
import { TropaPage } from '../tropa/tropa';
import { GemidasPage } from '../gemidas/gemidas';
import { OnePage } from '../one/one';
import { XingamentosPage } from '../xingamentos/xingamentos';
import { TiriricaPage } from '../tiririca/tiririca';
import { BambamPage } from '../bambam/bambam';
import { SocialSharing } from 'ionic-native';
import { OtavioPage } from '../otavio/otavio';
import { GilPage } from '../gil/gil';
import { MateiformigaPage } from '../mateiformiga/mateiformiga';
import { CabrasPage } from '../cabras/cabras';
import { DiadasemanaPage } from '../diadasemana/diadasemana';
import { DilmaPage } from '../dilma/dilma';
import { FrasesPage } from '../frases/frases';
import { FunkPage } from '../funk/funk';
import { ZePage } from '../ze/ze';
import { WhinderssonPage } from '../whindersson/whindersson';
import { DavyPage } from '../davy/davy';
import { CobraPage } from '../cobra/cobra';
import { SearchPage } from '../search/search';
import { ChavesPage } from '../chaves/chaves';
import { MiseraviPage } from '../miseravi/miseravi';
import { PapaPage } from '../papa/papa';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SapecaPage } from '../sapeca/sapeca';
import { CsgoPage } from '../csgo/csgo';
import { HinosPage } from '../hinos/hinos';
import { GuitarraPage } from '../guitarra/guitarra';
import { MusicaPage } from '../musica/musica';
import { PiadasPage } from '../piadas/piadas';
import { PqpPage } from '../pqp/pqp';
import { SomsdiversosPage } from '../somsdiversos/somsdiversos';
import { TodosPage } from '../todos/todos';
import { DouglasPage } from '../douglas/douglas';
import { AlborghettiPage } from '../alborghetti/alborghetti';
import { BolsonaroPage } from '../bolsonaro/bolsonaro';
import { TvPage } from '../tv/tv';
import { NovidadesPage } from '../novidades/novidades';
import { WhatsappPage } from '../whatsapp/whatsapp';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appodeal } from '@ionic-native/appodeal';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global';
import { Network } from '@ionic-native/network';
import { InAppPurchase } from '@ionic-native/in-app-purchase';




@Component({
  templateUrl: 'soundboard.html'
})
export class SoundboardPage {
   
   dragonPage = DragonPage;
   tropaPage = TropaPage;
   gemidasPage = GemidasPage;
   xingamentosPage = XingamentosPage;
   cabrasPage = CabrasPage;
   otavioPage = OtavioPage;
   gilPage = GilPage;
   chavesPage = ChavesPage;
   mateiformigaPage = MateiformigaPage;
   bambamPage = BambamPage;
   tiriricaPage = TiriricaPage;
   onePage = OnePage;
   whinderssonPage = WhinderssonPage;
   diadasemanaPage = DiadasemanaPage;
   dilmaPage = DilmaPage;
   alborghettiPage = AlborghettiPage;
   frasesPage = FrasesPage;
   funkPage = FunkPage;
   zePage = ZePage;
   csgoPage = CsgoPage;
   hinosPage = HinosPage;
   cobraPage = CobraPage;
   davyPage = DavyPage;
   searchPage = SearchPage; 
   miseraviPage = MiseraviPage;
   guitarraPage = GuitarraPage;
   bolsonaroPage = BolsonaroPage;
   musicaPage = MusicaPage;
   piadasPage = PiadasPage;
   papaPage = PapaPage;
   sapecaPage = SapecaPage;
   pqpPage = PqpPage;
   somsdiversosPage = SomsdiversosPage;
   todosPage = TodosPage;
   douglasPage = DouglasPage;
   tvPage = TvPage;
   novidadesPage = NovidadesPage
   whatsappPage = WhatsappPage;


   filenamee: string = "https://sound-board-image.firebaseapp.com/new/image.gif"
   base_url: string = "https://sound-board-image.firebaseapp.com/"; 
   main_url: string =  "https://sound-board-cc576.firebaseapp.com/Todos"
   sounds: any = [];
   counter: number =1;  
   soundFileNames: string[] = [];   
   media: any = null;   
   color1: string = "red3";
   color2: string = "dark";
   color3: string = "dark";

  
   constructor(app: App, 
               menu: MenuController, 
               public global: GlobalVars, 
               public alertCtrl: AlertController, 
               public storage: Storage,
               public platform: Platform, 
               public youtube: YoutubeVideoPlayer,
               public http: Http,                  
               public inAppPurchase: InAppPurchase,             
               public network: Network,
               public loadingCtrl: LoadingController, 
               public nav: NavController,  
               splashScreen: SplashScreen, 
               public appodeal: Appodeal) {
    this.nav = nav;
    menu.enable(true);
   

    this.http.get(this.base_url)
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
            
            let secondTitle = link.getAttribute("title")
            let links = link.getAttribute("link")

            this.sounds.push({
              link: links,
              title: link.innerHTML,
              secondTitle: secondTitle
            });

          }
        },
        err => console.error('There was an error: ' + err),
        () => console.log('Get request completed')
       );

     this.http.get(this.main_url)
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

            if(filename.startsWith("/")) {
              filename = this.main_url + filename
            }
            else {
              filename = this.main_url + "/" + filename
            }

             this.soundFileNames.push(filename);
            
          }
        },
        err => console.error('There was an error: ' + err),
        () => console.log('Get request completed')
       );
       setTimeout(function() {
       splashScreen.hide();
       }, 1000);
   } 

ionViewDidLoad() {  
  
  this.inAppPurchase
  .restorePurchases()
  .then ((data) => {
    console.log(data); 
   if(data != null && data.length > 0){
    this.storage.set('setMyGlobalNiggerPaid', true);      
    this.global.setMyGlobalNiggerPaid(true);
    this.storage.set('myGlobalHideButton', false);
    this.global.setMyGlobalHideButton(false);
    this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);  
    this.appodeal.hide(this.appodeal.AD_TYPES.BANNER_TOP);    
     // ---------------------------------------------------------------
   
    this.storage.get('myGlobalNiggerPaid').then((val) => {    
    console.log('myGlobalNiggerPaid IF =', val);
  }); 
    this.storage.get('myGlobalHideButton').then((val) => {    
    console.log('myGlobalHideButton IF =', val);
  });
        
   }else{
    this.storage.set('setMyGlobalNiggerPaid', false);
    this.global.setMyGlobalNiggerPaid(false);  
    this.storage.set('myGlobalHideButton', true);
    this.global.setMyGlobalHideButton(true);     
     
    // ---------------------------------------------------------------
    this.storage.get('myGlobalHideButton').then((val) => {    
    console.log('myGlobalHideButton ELSE =', val);
  });
    this.storage.get('myGlobalNiggerPaid').then((val) => {    
    console.log('myGlobalNiggerPaid ELSE =', val);
  });}  
  })
  .catch(function (err) {
    console.log(err);
  });    
  console.log('COUNTER', this.global.getMyGlobalCounter());
  if (this.global.getMyGlobalCounter() == 0){
     this.nav.setRoot(this.nav.getActive().component);     
     	this.storage.get('myGlobalCounter').then((val) => {
        val = 1;
        this.global.setMyGlobalCounter(val);
        console.log('COUNTERfadfasdsdasds', this.global.getMyGlobalCounter(), val);
     })
     
  }
}
ionViewDidEnter() { 
  this.checkConnection() 
}

openUrl(url){
        url="https://www.youtube.com/deadcomics"       
        window.open(url,'_system');
       
      
      }

 openUrl2(url){
  url="https://www.youtube.com/user/JothairEmPanico"       
  window.open(url,'_system');
}

openUrl3(url){
  url="https://www.youtube.com/channel/UCrZjxn8F02nJ9Wyj6-5_4HQ"       
  window.open(url,'_system');
}


checkConnection(){
       let networkType = this.network.type;
       if (networkType === 'none'){
          let confirm = this.alertCtrl.create({
             title: 'SEM INTERNET',
              message: 'Desculpa, mas esse aplicativo não funciona sem conexão com internet',
              buttons: [{
                  text: 'OK',
                  handler: () => {
                      this.platform.exitApp();
                  }
                }
              ]
            });
            confirm.present(); 
       }
      
}


/************ search *********/
  presentLoadingSearch() {
    this.color3 = "red3"
    setTimeout(() => this.color3 = "dark", 500);
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.searchPage);
  }, 500);

  setTimeout(() => {
    loading.dismiss();
  }, 500);
}

/************ tiririca *********/
  presentLoadingTiririca() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.tiriricaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ mateiformiga *********/
  presentLoadingHinos() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.hinosPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ mateiformiga *********/
  presentLoadingMateiformiga() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.mateiformigaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ papa *********/
  presentLoadingPapa() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.papaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ sapeca *********/
  presentLoadingSapeca() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.sapecaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ otavio *********/
  presentLoadingOtavio() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.otavioPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ gil *********/
  presentLoadingGil() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.gilPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ Cabras *********/
  presentLoadingCabras() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.cabrasPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ whindersson *********/
  presentLoadingWhindersson() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.whinderssonPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}


/************ one *********/
  presentLoadingOne() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.onePage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ davy *********/
  presentLoadingDavy() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.davyPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ cobra *********/
  presentLoadingCobra() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.cobraPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/************ babam *********/
  presentLoadingBambam() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.bambamPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ ze *********/
  presentLoadingZe() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.zePage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ miseravi *********/
  presentLoadingMiseravi() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.miseraviPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ miseravi *********/
  presentLoadingGuitarra() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.guitarraPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ douglas *********/
  presentLoadingDouglas() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.douglasPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ bolsonaro *********/
  presentLoadingBolsonaro() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.bolsonaroPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ alborghetti *********/
  presentLoadingAlborghetti() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.alborghettiPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ gemidas *********/
   presentLoadingGemidas() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.gemidasPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ diadasemana *********/
  presentLoadingDiadasemana() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.diadasemanaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ novidades *********/
  presentLoadingNovidades(sound) {        
    this.youtube.openVideo(sound.link);  
}

/************ dilma *********/
   presentLoadingDilma() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.dilmaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ dragon *********/
  presentLoadingDragon() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.dragonPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ frases *********/
  presentLoadingFrases() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.frasesPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 7000);
}

/************ funk *********/
  presentLoadingFunk() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.funkPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ musica *********/
  presentLoadingMusica() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.musicaPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ piadas *********/
  presentLoadingPiadas() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.piadasPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ pqp *********/
  presentLoadingPqp() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.pqpPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ somsdiversos *********/
  presentLoadingSomsdiversos() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.somsdiversosPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ whatsapp *********/
  presentLoadingWhatsapp() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.whatsappPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ xingamentos *********/
  presentLoadingXingamentos() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.xingamentosPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

/************ tv *********/
  presentLoadingTv() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Carregando...Por Favor Aguarde'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(this.tvPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}



   colourStyle(sound) { 
    this.color2 = "red3"
    setTimeout(() => this.color2 = "dark", 500);  
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
    const randomIndex = Math.floor(Math.random() * this.soundFileNames.length);
    const randomFileName = this.soundFileNames[randomIndex];
    console.log(randomFileName)
     if(this.media) {
      this.media.pause();
    }
    this.media = new Audio(randomFileName);
    this.media.load();
    this.media.play();
    
  
  }

  sendrandom(sound) {
    this.color1 = "dark"
    setTimeout(() => this.color1 = "red3", 500);    
    const randomIndex = Math.floor(Math.random() * this.soundFileNames.length);
    const randomFileName = this.soundFileNames[randomIndex];
    console.log(randomFileName)
    let loading = this.loadingCtrl.create({
      content: 'Preparando áudio para enviar...'
    });
    loading.present();
    if (this.global.getMyGlobalNiggerPaid() == true) {
      SocialSharing.share(null, null, randomFileName).then(res => {
        loading.dismiss();
      }).catch(err => {
        loading.dismiss();
        console.log(err);
      });
    } else {
      SocialSharing.shareViaWhatsAppToReceiver(null, null, randomFileName).then(res => {
        loading.dismiss();
      }).catch(err => {
        loading.dismiss();
        console.log(err);
      });
    }
  
  }  

   }
