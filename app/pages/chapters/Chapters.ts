import { Chapter } from './../../models/Chapter';
import { Component } from '@angular/core';
import { ChapterView } from '../chapter/Chapter';
import { NavController, PopoverController, ModalController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/chapters/Chapters.html',
  directives: [ChapterView]
})
export class Chapters {

  private chapters = new Map<string, Chapter>();

  public chapterList = [];

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController,
    public modalCtrl: ModalController, private http: Http) {
  }

  public showChapter( chapter: Chapter ) {
    console.log("itemSelected");
    console.log(chapter);
    //this.navCtrl.push(Chapter);
    //this.popoverCtrl.create(Chapter,{ nr :chapterNumber}).present();
    this.modalCtrl.create(ChapterView, { "chapter": chapter }).present();
  }

  public ngOnInit() {
    const chapters = {
      'Intro': 'build/data/chapters/intro.json',
      'TeamMember': 'build/data/chapters/team_member.json',
      'Manager': 'build/data/chapters/manager.json',
      'Consultant': 'build/data/chapters/consultant.json'
    };

    Object.keys(chapters).forEach(key => {
      let chapterUrl = chapters[key];

      this.http.get(chapterUrl).map(req => req.json()).subscribe(data => {
        this.chapters.set(key, data);
        this.chapterList.push(data);
      });
    });
  }

}
