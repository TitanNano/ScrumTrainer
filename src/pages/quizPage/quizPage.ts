import { Input, Component, OnInit } from '@angular/core';
import { QuizPart, AnswerOption } from './../../models/Chapter';

@Component({
    selector: 'quizPage',
    templateUrl: 'quizPage.html'
})

export class QuizPage implements OnInit
{
    @Input()
    public pageData: QuizPart;
    public revealingRightAnswer = false;
    public allRightAnswers = false;

    constructor() {}

    log(val) { console.log(val); }

    public answerChanged( option : AnswerOption )
    {
        if( this.pageData.noWrongOptions )
        {
            if( option.goTo )
            {
                this.pageData.goTo = option.goTo;
            }

            this.pageData.answered = true;
        }
    }

    public revealRightAnswer()
    {
        this.revealingRightAnswer = true;
        this.pageData.answered = true;
        this.allRightAnswers = true;
        
        for( let option of this.pageData.options )
		{
			if(
                ( option.isRight == true && !option.isSelected ) ||
                ( option.isRight == false && option.isSelected )
            )
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
