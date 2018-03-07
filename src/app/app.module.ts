//generated Pages
import { RenunganTeksPageModule } from './../pages/renungan-teks/renungan-teks.module';
import { RenunganVideoPageModule } from './../pages/renungan-video/renungan-video.module';
import { RenunganAudioPageModule } from './../pages/renungan-audio/renungan-audio.module';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YprmApiProvider } from '../providers/yprm-api/yprm-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { 
      tabsPlacement: 'bottom'
    }
      ),
    RenunganAudioPageModule,
    RenunganVideoPageModule,
    RenunganTeksPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YprmApiProvider,
    HttpClientModule
  ]
})
export class AppModule {}
