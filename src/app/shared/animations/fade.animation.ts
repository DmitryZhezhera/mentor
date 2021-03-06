import {animate, style, transition, trigger} from '@angular/animations';

export const fadeStateTrigger = trigger('fade', [
    transition(':enter', [
        style({
            opacity: 0
        }), animate(700)
    ]),
    transition(':leave', animate(700, style({
        opacity: 0
    })))

]);
