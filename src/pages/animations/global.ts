
import {style, state, animate, transition, trigger} from '@angular/core';

export let globalAnimations = [
    trigger('fadedIf', [
        transition(':enter', [   // :enter is alias to 'void => *'
            style({opacity:0}),
            animate(500, style({opacity:1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
            animate(500, style({opacity:0})) 
        ])
    ])
];
  