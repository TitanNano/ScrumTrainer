import { Input, Output, Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChapterView } from '../chapter/Chapter';
import { Chapter, QuizPart } from './../../models/Chapter';

@Component({
    selector: 'quizPage',
    inputs: ['pageData'],
    templateUrl: 'build/pages/quizPage/QuizPage.html'
})

export class QuizPage implements OnInit
{
    @Input() pageData:QuizPart;
    public revealingRightAnswer = false;
    public allRightAnswers = false;

    constructor()
    {
    }

    public revealRightAnswer()
    {
        this.revealingRightAnswer = true;
        this.pageData.answered = true;
        this.allRightAnswers = true;
        
        for( let option of this.pageData.options )
		{
			if( option.isRight != option.isSelected )
			{
				this.allRightAnswers = false;
			}
		}
        
        this.pageData.allRightAnswers = this.allRightAnswers;
    }

    ngOnInit()
    {
        console.log("page Data",this.pageData);
    }
}
