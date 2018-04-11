import { Chapter } from './../../models/Chapter';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ViewController, Slides, Range } from 'ionic-angular';

import { Chapters } from '../chapters/Chapters';
import { QuizPage } from '../quizPage/QuizPage';


@Component({
    selector:       'chapter',
    templateUrl:    'Chapter.html'
})

export class ChapterView implements OnInit
{
    public chapterData : Chapter;
    public currentIndex = 0;
    public rangerActiveIndex = 1;
    public isEnd = false;

    @ViewChild('ranger') ranger: Range;
    @ViewChild('slider') slider: Slides;

    constructor( public modal: ViewController )
    {
        let params = modal.getNavParams()
        if( params.data.chapter )
        {
            this.chapterData = params.data.chapter;
        }
    }

    ngOnInit()
    {
        this.ranger.pin = false;
    }

    onSlideChanged()
    {
        this.currentIndex = this.slider.getActiveIndex();
        this.isEnd = this.currentIndex == this.slider.length()-1;
        this.rangerActiveIndex = this.currentIndex + 1
        console.log("this.currentIndex",this.currentIndex);
    }

    wrongAnswers()
    {
        let wrongs = 0;
        for( let part of this.chapterData.parts )
        {
            if( part.answered && !part.allRightAnswers )
            {
                wrongs++;
            }
        }
        return wrongs;
    }

    goNext()
    {
        //this.slider.isEnd
        if( this.isEnd != true )
        {
            this.slider.slideNext();
            this.ranger.value = this.currentIndex;
        }
    }

    public allRightAnswers()
    {
        return this.chapterData.parts[this.currentIndex].allRightAnswers;
    }

    dismiss()
    {
        let allAnswered = this.chapterData.parts.length > 0 ? true : false;
        
        for( let part of this.chapterData.parts )
        {
            if (part.answered == false)
            {
                allAnswered = false;
            }
        }

        if( allAnswered )
        {
            this.chapterData.allAnswered = allAnswered;
        }

        for( let part of this.chapterData.parts )
        {
            part.answered = false;
            for( let option of part.options )
            {
                option.isSelected = false;
            }
        }

        this.modal.dismiss();
    }
}
