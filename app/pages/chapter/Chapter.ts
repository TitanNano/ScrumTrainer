import { Chapter } from './../../models/Chapter';
import { Component } from '@angular/core';
import { ModalController, Modal, ViewController } from 'ionic-angular';

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

    constructor( public modal: ViewController )
    {
        let params = modal.getNavParams()
        if( params.data.chapter )
        {
            this.chapterData = params.data.chapter;
        }
        console.log("chapterData",this.chapterData);
    }

    dismiss()
    {
        this.modal.dismiss();
    }
}
