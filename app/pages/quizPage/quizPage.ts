import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChapterView } from '../chapter/Chapter';

@Component({
    selector: 'quizPage',
    templateUrl: 'build/pages/quizPage/QuizPage.html'
})

export class QuizPage
{
    pageData:any
    constructor()
    {
        console.log("arguments",arguments);
        //console.log(chapter);
    }
}
