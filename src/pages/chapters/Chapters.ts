import { Chapter } from './../../models/Chapter';
import { Component } from '@angular/core';
import { ChapterView } from '../chapter/Chapter';
import { NavController, PopoverController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'Chapters.html'
})
export class Chapters
{
    public chapterList = [];

    constructor( public navCtrl: NavController,
        public popoverCtrl: PopoverController,
        public modalCtrl: ModalController,
        private http: HttpClient ) {
    }

    public showChapter( chapter: Chapter )
    {
        this.modalCtrl.create(ChapterView, { "chapter": chapter }).present();
    }

    public ngOnInit()
    {   
        let IntroChapterUrl = "assets/data/chapters/intro.json";
        
        this.http.get<Chapter>(IntroChapterUrl).subscribe( introData =>
        {
            console.log( introData );
            
            this.chapterList.push(new Chapter(introData));

            let chapterUrl = "assets/data/chapters/chapters.json";
            this.http.get<{chapters:Chapter[]}>(chapterUrl).subscribe(data =>
            {
                console.log( data, "chapters" );
                
                if( data.chapters )
                {
                    for( let key in data.chapters )
                    {
                        let chapterData = data.chapters[key];
                        this.chapterList.push(new Chapter(chapterData));
                    }
                }
            });
        });
        
    }
}
