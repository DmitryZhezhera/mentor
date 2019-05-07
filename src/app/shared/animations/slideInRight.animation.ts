import {animate, style, transition, trigger} from '@angular/animations';

export const slideInRightStateTrigger = trigger('slideInRight', [
    transition(':enter', [
        style({
            transform: 'translateX(-100%)'
        }),
        animate(1000)
    ]),
]);
