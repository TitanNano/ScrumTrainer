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
export class Chapters
{
    private chapters = new Map<string, Chapter>();
    public chapterList = [];

    constructor(public navCtrl: NavController,public popoverCtrl: PopoverController,
        public modalCtrl: ModalController, private http: Http) {
    }

    public showChapter( chapter: Chapter )
    {
        this.modalCtrl.create(ChapterView, { "chapter": chapter }).present();
    }

    public ngOnInit()
    {   
        let IntroChapterUrl = "build/data/chapters/intro.json";
        this.http.get(IntroChapterUrl).map(req => req.json()).subscribe(introData =>
        {
            this.chapters.set("Intro", introData);
            this.chapterList.push(introData);

            let chapterUrl = "build/data/chapters/chapters.json";
            this.http.get(chapterUrl).map(req => req.json()).subscribe(data =>
            {
                if( data.chapters )
                {
                    for( let key in data.chapters )
                    {
                        let chapterData = data.chapters[key];
                        this.chapters.set(key, chapterData);
                        this.chapterList.push(chapterData);
                    }
                }
            });
        });

        
    }
}
