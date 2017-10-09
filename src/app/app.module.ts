import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { GilPage } from '../pages/gil/gil';
import { OtavioPage } from '../pages/otavio/otavio';
import { MateiformigaPage } from '../pages/mateiformiga/mateiformiga';
import { SoundboardPage } from '../pages/soundboard/soundboard';
import { DragonPage } from '../pages/dragon/dragon';
import { HinosPage } from '../pages/hinos/hinos';
import { CsgoPage } from '../pages/csgo/csgo';
import { AgPage } from '../pages/csgo/ag/ag';
import { HoPage } from '../pages/csgo/ho/ho';
import { PwPage } from '../pages/csgo/pw/pw';
import { RadioPage } from '../pages/csgo/radio/radio';
import { SearchPage } from '../pages/search/search';
import { PapaPage } from '../pages/papa/papa';
import { SapecaPage } from '../pages/sapeca/sapeca';
import { TiriricaPage } from '../pages/tiririca/tiririca';
import { ZePage } from '../pages/ze/ze';
import { BarrigaPage } from '../pages/chaves/barriga/barriga';
import { ChapolinPage } from '../pages/chaves/chapolin/chapolin';
import { ChavessPage } from '../pages/chaves/chaves/chaves';
import { ChiquinhaPage } from '../pages/chaves/chiquinha/chiquinha';
import { FlorindaPage } from '../pages/chaves/florinda/florinda';
import { GirafalesPage } from '../pages/chaves/girafales/girafales';
import { MadrugaPage } from '../pages/chaves/madruga/madruga';
import { OutroschavesPage } from '../pages/chaves/outroschaves/outroschaves';
import { QuicoPage } from '../pages/chaves/quico/quico';
import { MiseraviPage } from '../pages/miseravi/miseravi';
import { GuitarraPage } from '../pages/guitarra/guitarra';
import { GemidasPage } from '../pages/gemidas/gemidas';
import { TropaPage } from '../pages/tropa/tropa';
import { AndrePage } from '../pages/tropa/andre/andre';
import { Market } from '@ionic-native/market';
import { BaianoPage } from '../pages/tropa/baiano/baiano';
import { FabioPage } from '../pages/tropa/fabio/fabio';
import { FortunatoPage } from '../pages/tropa/fortunato/fortunato';
import { NascimentoPage } from '../pages/tropa/nascimento/nascimento';
import { OutrosPage } from '../pages/tropa/outros/outros';
import { RochaPage } from '../pages/tropa/rocha/rocha';
import { XingamentosPage } from '../pages/xingamentos/xingamentos';
import { BambamPage } from '../pages/bambam/bambam';
import { ChavesPage } from '../pages/chaves/chaves';
import { DiadasemanaPage } from '../pages/diadasemana/diadasemana';
import { DilmaPage } from '../pages/dilma/dilma';
import { FrasesPage } from '../pages/frases/frases';
import { FunkPage } from '../pages/funk/funk';
import { MusicaPage } from '../pages/musica/musica';
import { PiadasPage } from '../pages/piadas/piadas';
import { PqpPage } from '../pages/pqp/pqp';
import { CobraPage } from '../pages/cobra/cobra';
import { WhinderssonPage } from '../pages/whindersson/whindersson';
import { DavyPage } from '../pages/davy/davy';
import { OnePage } from '../pages/one/one';
import { SomsdiversosPage } from '../pages/somsdiversos/somsdiversos';
import { BolsonaroPage } from '../pages/bolsonaro/bolsonaro';
import { AlborghettiPage } from '../pages/alborghetti/alborghetti';
import { TodosPage } from '../pages/todos/todos';
import { DouglasPage } from '../pages/douglas/douglas';
import { TvPage } from '../pages/tv/tv';
import { CabrasPage } from '../pages/cabras/cabras';
import { NovidadesPage } from '../pages/novidades/novidades';
import { WhatsappPage } from '../pages/whatsapp/whatsapp';
import { FavouritesPage } from '../pages/favourites/favourites';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavouritesData } from '../providers/favouritesdata';
import { Appodeal } from '@ionic-native/appodeal';
import { GlobalVars } from '../providers/global';
import { Data } from '../providers/data';
import { Network } from '@ionic-native/network';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

@NgModule({ 
  declarations: [
    MyApp,
    SoundboardPage,    
    DragonPage,
    TropaPage,
    OnePage,
    AndrePage,
    BarrigaPage,
    ChapolinPage,
    MateiformigaPage,
    ChavessPage,
    PapaPage,
    RadioPage,
    CsgoPage,
    AgPage,
    HoPage,
    PwPage,
    SapecaPage,
    ChiquinhaPage,
    FlorindaPage,
    GirafalesPage,
    MadrugaPage,
    OutroschavesPage,
    QuicoPage,
    BaianoPage,
    OtavioPage,
    GilPage,
    GemidasPage,
    FabioPage,
    CobraPage,
    DavyPage,
    FortunatoPage,
    NascimentoPage,
    OutrosPage,
    TiriricaPage,
    RochaPage,
    XingamentosPage,
    BambamPage,
    DiadasemanaPage,
    DilmaPage,
    WhinderssonPage,
    GuitarraPage,
    MiseraviPage,
    ZePage,
    SearchPage,
    ChavesPage,
    FrasesPage,
    HinosPage,
    MusicaPage,
    PiadasPage,
    FunkPage,
    PqpPage,
    SomsdiversosPage,
    TodosPage,
    DouglasPage,
    CabrasPage,
    BolsonaroPage,
    AlborghettiPage,
    TvPage,
    NovidadesPage,
    WhatsappPage,
    FavouritesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SoundboardPage,    
    DragonPage,
    TropaPage,
    AndrePage,
    RadioPage,
    CsgoPage,
    AgPage,
    HoPage,
    PwPage,
    HinosPage,
    BarrigaPage,
    ChapolinPage,
    ChavessPage,
    ChavesPage,
    ChiquinhaPage,
    MateiformigaPage,
    FlorindaPage,
    GirafalesPage,
    MadrugaPage,
    OutroschavesPage,
    QuicoPage,
    OnePage,
    PapaPage,
    SapecaPage,
    GemidasPage,
    TiriricaPage,
    OtavioPage,
    GilPage,
    GuitarraPage,
    CabrasPage,
    MiseraviPage,
    ZePage,
    CobraPage,
    WhinderssonPage,
    DavyPage,
    SearchPage,
    BaianoPage,
    FabioPage,
    FortunatoPage,
    NascimentoPage,
    OutrosPage,
    RochaPage,
    XingamentosPage,
    BambamPage,
    DiadasemanaPage,
    DilmaPage, 
    FrasesPage,
    MusicaPage,
    PiadasPage,
    FunkPage,
    PqpPage,
    SomsdiversosPage,
    TodosPage,
    DouglasPage,
    BolsonaroPage,
    AlborghettiPage,
    TvPage,
    NovidadesPage,
    WhatsappPage,
    FavouritesPage,
    TabsPage
  ],
  providers: [
    FavouritesData,
    StatusBar,
    SplashScreen,
    Network,
    YoutubeVideoPlayer,
    Appodeal,
    InAppPurchase,    
    GlobalVars,
    Market,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
