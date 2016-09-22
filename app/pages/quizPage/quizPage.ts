import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter } from '../chapter/Chapter';
@Component({
  templateUrl: 'build/pages/chapters/quizPage.html'
})
export class Chapters {

  constructor(public navCtrl: NavController) {
  }
}
