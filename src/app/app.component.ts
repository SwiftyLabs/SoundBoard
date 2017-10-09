import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appodeal } from '@ionic-native/appodeal';
import { Storage } from '@ionic/storage';
import { GlobalVars } from '../providers/global';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
 


import { TabsPage } from '../pages/tabs/tabs';
declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, public inAppPurchase: InAppPurchase, public appCtrl: App, public storage: Storage, public global: GlobalVars, statusBar: StatusBar, private appodeal: Appodeal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      

       var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

    window["plugins"].OneSignal
    .startInit("543d6e41-1378-4347-b336-2aa0d9ea1031", "195856453714")
  	.handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  
   
   
   const appKey = '983dc88cc9a72f1b9f8263aefbe910bc49a78c18e429f69d';
   appodeal.confirm(appodeal.AD_TYPES.SKIPPABLE_VIDEO)      
   appodeal.initialize(appKey, appodeal.AD_TYPES.BANNER_TOP | appodeal.AD_TYPES.INTERSTITIAL);
   appodeal.show(appodeal.AD_TYPES.BANNER_TOP);
     
  
   
                      
  });  
  
  
  this.global.setMyGlobalCounter(0)
}

}
