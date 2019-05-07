import {animate, style, transition, trigger} from '@angular/animations';

export const slideInLeftStateTrigger = trigger('slideInLeft', [
    transition(':enter', [
        style({
            transform: 'translateX(100%)'
        }), animate(1000)
    ]),
]);
