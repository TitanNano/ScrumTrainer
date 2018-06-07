import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { Chapters } from '../pages/chapters/Chapters';
import { Settings } from '../pages/settings/Settings';
import { ChapterView } from '../pages/chapter/Chapter';
import { QuizPage } from '../pages/quizPage/quizPage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp,
		Chapters,
		Settings,
		ChapterView,
		QuizPage
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Chapters,
		Settings,
		ChapterView,
		QuizPage
	],
	providers: [
		HttpClient,
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
