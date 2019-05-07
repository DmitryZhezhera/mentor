import {animate, style, transition, trigger} from '@angular/animations';

export const slideInBotomStateTrigger = trigger('slideInBottom', [
    transition(':enter', [
        style({
            transform: 'translateY(100%)'
        }),
        animate(1000)
    ]),
]);
