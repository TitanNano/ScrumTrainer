import { Chapter } from './../../models/Chapter';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ViewController, Slides, Range } from 'ionic-angular';
import { Swiper } from 'ionic-angular/components/slides/swiper-widget';

import { Chapters } from '../chapters/Chapters';
import { QuizPage } from '../quizPage/QuizPage';


@Component({
    selector:       'chapter',
    templateUrl:    'build/pages/chapter/Chapter.html'
    ,directives:     [QuizPage]
})
export class ChapterView
{
    public chapterData : Chapter;
    
    @ViewChild('ranger') ranger: Range;
    @ViewChild('slider') slider: Slides;

    constructor( public modal: ViewController )
    {
        let params = modal.getNavParams()
        if( params.data.chapter )
        {
            this.chapterData = params.data.chapter;
        }
        //this.slider.getSlider().lockSwipes()
        //console.log("chapterData",this.chapterData);
    }

    goNext()
    {
        this.slider.slideNext();
        this.ranger.value = this.ranger.value + 1;
    }

    dismiss()
    {
        this.modal.dismiss();
    }
}
