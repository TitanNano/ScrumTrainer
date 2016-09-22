import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { Chapters } from '../chapters/Chapters';

@Component({
  templateUrl: 'build/pages/chapter/Chapter.html'
})
export class Chapter
{

    constructor(public chaptersCtrl: ViewController)
    {
        console.log(chaptersCtrl);
    }

    dismiss()
    {
        console.log("dismiss");
        this.chaptersCtrl.dismiss();
    }

}
