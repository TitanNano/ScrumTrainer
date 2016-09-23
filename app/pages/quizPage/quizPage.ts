import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter } from '../chapter/Chapter';

@Component({
  selector: 'quizPage',
  templateUrl: 'build/pages/chapters/quizPage.html'
})
export class QuizPage
{

    constructor(public chapter: Chapter)
    {

    }
}
