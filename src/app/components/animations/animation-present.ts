import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOut', [
    state('true', style({opacity: 1})),
    state('false', style({opacity: 0})),
    transition('true <=> false', animate(1000)),
]);
