import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Menu } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Chapters } from '../pages/chapters/Chapters';
import { Settings } from '../pages/settings/Settings';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild('content') nav: NavController;
	@ViewChild('menu') menu: Menu;

	rootPage = Chapters;
	pages: Array<{title: string, component: Page, icon: string}>;

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

	openPage(page) {
        //this.rootPage = page;
		console.log("OPENPAGE")
        this.nav.setRoot(page.component);

        // close the menu when clicking a link from the menu
        this.menu.close();
    }
}
