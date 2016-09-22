import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController, NavParams } from 'ionic-angular';
import { Chapter } from '../chapter/Chapter';
@Component({
  templateUrl: 'build/pages/chapters/Chapters.html'
})
export class Chapters
{

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController)
    {
    }

    showChapter( chapterNumber: number )
    {
        console.log("itemSelected");
        console.log(chapterNumber);
        //this.navCtrl.push(Chapter);
        //this.popoverCtrl.create(Chapter,{ nr :chapterNumber}).present();
        this.modalCtrl.create(Chapter,{ nr :chapterNumber}).present();
    }
}
