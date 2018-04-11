import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Chapters } from '../pages/chapters/Chapters';
import { Settings } from '../pages/settings/Settings';
import { ChapterView } from '../pages/chapter/Chapter';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Chapters;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.pages = [
        { title: 'Kapitel', component: Chapters, icon: 'home' },
        { title: 'Einstellungen', component: Settings, icon: 'settings' }
      ];
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
