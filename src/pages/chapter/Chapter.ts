import { Chapter } from './../../models/Chapter';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ViewController, Slides, Range, GESTURE_TOGGLE } from 'ionic-angular';

@Component({
    selector:       'chapter',
    templateUrl:    'Chapter.html'
})

export class ChapterView implements OnInit
{
    public chapterData : Chapter;
    public currentIndex = 0;
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
        if( this.ranger )
        {
            this.ranger.pin = false;
            this.ranger.value = 1;
        }

        this.slider.lockSwipes(true);
    }

    ionViewWillEnter()
    {
        this.chapterData.resetAnswers();
    }

    showNextOrGoNext() : boolean
    {
        if ( !this.slider.isEnd() )
        {
            let qPart = this.chapterData.parts[this.slider.getActiveIndex()];

            if ( qPart && qPart.answered )
            {
                if ( qPart.noWrongOptions )
                {
                    this.goNext();
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    onSlideChanged()
    {
        this.currentIndex = this.slider.getActiveIndex();
        this.isEnd = this.slider.isEnd();
        if( this.ranger )
        {
            this.ranger.value = this.currentIndex + 1;
        }
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
        this.slider.lockSwipes(false);
        
        if( this.slider && !this.slider.isEnd() )
        {
            let qPart = this.chapterData.parts[this.slider.getActiveIndex()];
            if( qPart && typeof qPart.goTo == "number" )
            {
                if( qPart.goTo < 0 )
                {
                    // this.slider.slideTo( this.slider.length() - 1 );
                    this.dismiss();
                } else
                {
                    this.slider.slideTo( qPart.goTo );
                }
            }
            else
            {
                this.slider.slideNext();
            }
        }

        this.slider.lockSwipes(true);
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
