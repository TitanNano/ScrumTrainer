import { Input, Component, OnInit } from '@angular/core';
import { QuizPart, AnswerOption } from './../../models/Chapter';
import { globalAnimations } from "../animations/global";

@Component({
    selector: 'quizPage',
    templateUrl: 'quizPage.html'
    ,animations: globalAnimations
})

export class QuizPage implements OnInit
{
    @Input()
    public quizPart: QuizPart;
    public revealingRightAnswer = false;
    public allRightAnswers = false;

    constructor() {}

    log(val) { console.log(val); }

    public answerChanged( option : AnswerOption )
    {
        option.select();

        if( this.quizPart.noWrongOptions )
        {
            this.quizPart.checkAnswers();
            return;
        }
        
        if( this.quizPart.singleSelect )
        {
            // this.revealRightAnswer();
        }

    }

    public revealRightAnswer()
    {
        this.revealingRightAnswer = true;
        this.quizPart.checkAnswers();
        this.allRightAnswers = this.quizPart.allRightAnswers;
    }

    ngOnInit()
    {
        // console.log("page Data",this.pageData);
    }
}
