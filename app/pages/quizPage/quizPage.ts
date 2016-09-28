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
    
    constructor()
    {
        console.log("pageData",this.pageData);
        //console.log(chapter);
    }


    ngOnInit()
    {
        console.log("page Data",this.pageData);
    }
}
